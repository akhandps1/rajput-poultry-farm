import { useState, useEffect } from 'react';

function Hero() {
  const slides = [
    { 
      src: "https://i.ibb.co/RTF40D65/image1.jpg", 
      href: "https://ibb.co/jkNZMrwp", 
      alt: "Poultry Farm Image 1" 
    },
    { 
      src: "https://i.ibb.co/7NYXrNpY/image2.jpg", // Placeholder, replace with your image
      href: "https://ibb.co/5xM6sxjM", // Placeholder, replace with your link
      alt: "Poultry Farm Image 2" 
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center text-white relative">
      {/* Slider Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <a
            key={index}
            href={slide.href}
            className={`absolute inset-0 hero-slide ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
      {/* Text Overlay */}
      <div className="hero-overlay w-full py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          राजपूत पोल्ट्री फार्म
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-medium drop-shadow-md">
          Fresh, High-Quality Meat Available 24/7 for Your Needs
        </p>
        <a
          href="#contact"
          className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
}

export default Hero;