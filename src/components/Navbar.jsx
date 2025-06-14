import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">Rajput Poultry Farm</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-orange-500 font-medium">Home</a>
          <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium">Services</a>
          <a href="#gallery" className="text-gray-700 hover:text-orange-500 font-medium">Gallery</a>
          <a href="#about" className="text-gray-700 hover:text-orange-500 font-medium">About</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium">Contact</a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a href="#home" className="text-gray-700 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;