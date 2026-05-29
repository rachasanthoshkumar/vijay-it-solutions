/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        graphite: '#172033',
        cloud: '#f6f8fb',
        coral: '#ff6b4a',
        mint: '#2dd4bf',
        cobalt: '#2f6fed'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(7, 17, 31, 0.14)',
        glow: '0 18px 50px rgba(47, 111, 237, 0.24)'
      },
      backgroundImage: {
        'agency-radial':
          'radial-gradient(circle at top left, rgba(45, 212, 191, 0.22), transparent 34%), radial-gradient(circle at 80% 10%, rgba(255, 107, 74, 0.2), transparent 30%), linear-gradient(135deg, #07111f 0%, #172033 58%, #10283f 100%)'
      }
    }
  },
  plugins: []
};
