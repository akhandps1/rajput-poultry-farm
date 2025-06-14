function Contact() {
    return (
      <footer id="contact" className="bg-gray-900 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-4">
            <b>Address:</b> Kasia Road, Sarisawa Bazar, Near Turkpatti, Gurwalia Bazar, Uttar Pradesh, India
          </p>
          <p className="text-lg mb-4">
            Phone: <a href="tel:+91 96530 57882" className="text-orange-400 hover:underline">+91 96530 57882</a>
          </p>
          <p className="text-lg mb-4">
            Email: <a href="mailto:arunkumar1981@gmail.com" className="text-orange-400 hover:underline">arunkumar1981@gmail.com</a>
          </p>
          <p className="text-lg mb-8">Open 24/7 for your convenience</p>
          {/* Location Map */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.81612328793!2d84.0827213312483!3d26.755206756219945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399397002321bf11%3A0x370ffe89cea71195!2sRajput%20Poultry%20Farm!5e0!3m2!1sen!2sin!4v1749896619237!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
              title="Rajput Poultry Farm Location"
            ></iframe>
            <a
              href="https://www.google.com/maps/dir//Rajput+Poultry+Farm+Q33M%2BQ49+Korya,+Uttar+Pradesh+274407/@26.7552686,84.082643,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399397002321bf11:0x370ffe89cea71195!2m2!1d84.082643!2d26.7552686?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D/dir/?api=1&destination=26.898556,83.719222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Contact;