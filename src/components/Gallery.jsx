function Gallery() {
    const galleryImages = [
      { 
        src: "https://i.ibb.co/RTF40D65/image1.jpg", 
        href: "https://ibb.co/jkNZMrwp", 
        alt: "Gallery Image 1" 
      },
      { 
        src: "https://i.ibb.co/7NYXrNpY/image2.jpg", // Placeholder, replace with your image
        href: "https://ibb.co/5xM6sxjM", // Placeholder, replace with your link
        alt: "Gallery Image 2" 
      },
      { 
        src: "https://i.ibb.co/RTF40D65/image1.jpg", // Placeholder, replace with your image
        href: "https://ibb.co/jkNZMrwp", // Placeholder, replace with your link
        alt: "Gallery Image 3" 
      },
      { 
        src: "https://i.ibb.co/7NYXrNpY/image2.jpg", // Placeholder, replace with your image
        href: "https://ibb.co/5xM6sxjM", // Placeholder, replace with your link
        alt: "Gallery Image 4" 
      },
    ];
  
    return (
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Farm Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <a key={index} href={image.href} className="block">
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-img w-full h-48 object-cover rounded-lg shadow-md"
                border="0"
              />
            </a>
          ))}
        </div>
      </section>
    );
  }
  
  export default Gallery;