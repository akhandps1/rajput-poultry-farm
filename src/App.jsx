import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=+91 96530 57882&text=Hello%20Rajput%20Poultry%20Farm,%20I%20have%20a%20query%20about%20your%20poultryFarm!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors animate-pulse flex items-center space-x-2"
        aria-label="Chat with us on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.21.73 4.25 1.95 5.91L2.13 22l4.29-1.95c1.66 1.22 3.7 1.95 5.91 1.95 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.75 0-3.36-.49-4.74-1.33l-.34-.2-2.55 1.16 1.16-2.55-.2-.34c-.84-1.38-1.33-3-1.33-4.74 0-4.91 4-8.91 8.91-8.91s8.91 4 8.91 8.91-4 8.91-8.91 8.91zm4.91-6.65c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.52-2.16-1.66-.8-.88-1.34-1.97-1.5-2.25-.16-.27-.02-.41.12-.54.13-.12.27-.32.41-.48.14-.16.18-.27.09-.41-.09-.14-.41-.48-.55-.66-.14-.18-.07-.34.02-.48.09-.14.41-.48.55-.66.14-.18.25-.23.41-.14.16.09.95.46 1.13.55.18.09.3.14.43.23.13.09.25.32.34.48.09.16.09.34-.02.48-.09.14-.27.32-.41.48z" />
        </svg>
        <span className="text-sm font-semibold">Chat Now</span>
      </a>
    </div>
  );
}

export default App;