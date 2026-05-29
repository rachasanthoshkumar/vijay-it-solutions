import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Stats from './components/Stats.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ServicePage from './components/ServicePage.jsx';
import ContactPage from './components/ContactPage.jsx';
import CareersPage from './components/CareersPage.jsx';
import CareerDetailPage from './components/CareerDetailPage.jsx';
import { careerDetailPages, servicePages } from './data/siteData.js';

export default function App() {
  const rawPath = window.location.pathname === '/index.html' ? '/' : window.location.pathname;
  const currentPath = rawPath.length > 1 ? rawPath.replace(/\/$/, '') : rawPath;
  const servicePage = servicePages[currentPath];
  const careerDetailPage = careerDetailPages[currentPath];

  return (
    <div className="min-h-screen overflow-hidden bg-cloud text-ink">
      <Navbar />
      {currentPath === '/contact' ? (
        <ContactPage />
      ) : currentPath === '/careers' ? (
        <CareersPage />
      ) : careerDetailPage ? (
        <CareerDetailPage page={currentPath} />
      ) : servicePage ? (
        <ServicePage page={currentPath} />
      ) : (
        <main>
          <Hero />
          <Services />
          <About />
          <Stats />
          {/* <Testimonials /> */}
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}
