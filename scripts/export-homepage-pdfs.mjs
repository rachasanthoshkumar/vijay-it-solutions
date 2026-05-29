import fs from 'node:fs/promises';

const targetUrl = 'http://127.0.0.1:5174/';
const outputDir = new URL('../exports/', import.meta.url);

const views = [
  { name: 'desktop', width: 1440, height: 1400, paperWidth: 14.4 },
  { name: 'tablet', width: 768, height: 1200, paperWidth: 7.68 },
  { name: 'mobile', width: 390, height: 1000, paperWidth: 3.9 }
];

async function getJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${url}`);
  }
  return response.json();
}

async function createCdpClient(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  let id = 0;
  const pending = new Map();

  socket.addEventListener('message', (event) => {
    const payload = JSON.parse(event.data);
    if (payload.id && pending.has(payload.id)) {
      const { resolve, reject } = pending.get(payload.id);
      pending.delete(payload.id);
      if (payload.error) {
        reject(new Error(payload.error.message));
      } else {
        resolve(payload.result);
      }
    }
  });

  await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });

  return {
    send(method, params = {}) {
      id += 1;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
      });
    },
    close() {
      socket.close();
    }
  };
}

async function waitForLoad(client) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    const { result } = await client.send('Runtime.evaluate', {
      expression: 'document.readyState',
      returnByValue: true
    });
    if (result.value === 'complete') {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

await fs.mkdir(outputDir, { recursive: true });

for (const view of views) {
  const { webSocketDebuggerUrl } = await getJson('http://127.0.0.1:9222/json/new', { method: 'PUT' });
  const client = await createCdpClient(webSocketDebuggerUrl);

  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: view.width,
    height: view.height,
    deviceScaleFactor: 1,
    mobile: view.width < 768
  });
  await client.send('Page.navigate', { url: targetUrl });
  await waitForLoad(client);

  const { result: scrollHeightResult } = await client.send('Runtime.evaluate', {
    expression: 'Math.ceil(document.documentElement.scrollHeight)',
    returnByValue: true
  });
  const pageHeightPx = scrollHeightResult.value;
  const paperHeight = Math.max(11, (pageHeightPx / view.width) * view.paperWidth);

  const { data } = await client.send('Page.printToPDF', {
    printBackground: true,
    paperWidth: view.paperWidth,
    paperHeight,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    preferCSSPageSize: false
  });

  await fs.writeFile(new URL(`homepage-${view.name}.pdf`, outputDir), Buffer.from(data, 'base64'));
  client.close();
}
