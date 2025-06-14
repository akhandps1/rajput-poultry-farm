function Services() {
    const services = [
      { title: "24/7 Meat Sales", description: "We provide fresh poultry meat round the clock to meet your needs anytime." },
      { title: "Fresh & Hygienic", description: "Our farm ensures the highest standards of hygiene and quality in every cut." },
      { title: "Custom Orders", description: "Need specific cuts or quantities? Contact us for tailored orders." },
    ];
  
    return (
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Services;