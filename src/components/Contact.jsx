const Contact = () => {

  // Main Contact Cards (3 utama seperti design)
  const mainContactMethods = [
    {
      id: 1,
      name: "Email Me",
      icon: "ri-mail-send-fill",
      value: "inyomanwahyu123@gmail.com",
      href: "mailto:inyomanwahyu123@gmail.com",
      color: "green",
      delay: 100
    },
    {
      id: 2,
      name: "WhatsApp",
      icon: "ri-phone-fill",
      value: "+62 853-9910-1184",
      href: "https://wa.me/6285399101184?text=Halo,%20saya%20tertarik%20untuk%20berkolaborasi",
      color: "green",
      delay: 200
    },
    {
      id: 3,
      name: "Location",
      icon: "ri-map-pin-fill",
      value: "Makassar, Indonesia",
      href: "#",
      color: "green",
      delay: 300
    },
  ];

  // Follow Me Social Links
  const socialLinks = [
    {
      id: 1,
      name: "Instagram",
      icon: "ri-instagram-fill",
      href: "https://www.instagram.com/inyoman_wahyu1/",
      color: "pink",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: "ri-linkedin-fill",
      href: "https://www.linkedin.com/in/i-nyoman-wahyu",
      color: "blue",
    },
    {
      id: 3,
      name: "GitHub",
      icon: "ri-github-fill",
      href: "https://github.com/NyomanWahyu01",
      color: "gray",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">

      {/* FOLLOW ME */}
      <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((social) => {
            const colorClasses = {
              pink: "bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 hover:text-pink-300",
              blue: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300",
              gray: "bg-gray-500/10 hover:bg-gray-500/20 text-gray-400 hover:text-gray-300",
            };
            return (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 ${colorClasses[social.color]} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={400 + social.id * 100}
                title={social.name}
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            );
          })}
        </div>
      </div>
      {/* END  FOLLOW ME*/}

       {/* ACTION BUTTON 2 GREEN */}
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a
          href="mailto:inyomanwahyu123@gmail.com"
          className="group bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 flex items-center gap-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <span>Send Email</span>
          <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
        </a>
        <a
          href="https://wa.me/6285399101184?text=Halo,%20saya%20tertarik%20untuk%20berkolaborasi"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-500/80 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 flex items-center gap-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <span>Schedule via WhatsApp</span>
          <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
        </a>
      </div>
      {/* END ACTION BUTTON*/}

      {/* Main Contact Cards - 3 Cards Horizontal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {mainContactMethods.map((method) => (
          <a
            key={method.id}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group relative bg-zinc-800/50 border border-zinc-700 rounded-xl p-5 transition-all duration-300 hover:bg-zinc-800 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1 overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={method.delay}
          >
            {/* Content */}
            <div className="flex items-center gap-4 relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 bg-green-500/10 group-hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
                <i className={`${method.icon} text-2xl text-green-400 group-hover:text-green-300 transition-colors duration-300`}></i>
              </div>
              
              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-white mb-1">
                  {method.name}
                </h3>
                <p className="text-sm text-gray-400 truncate group-hover:text-gray-300 transition-colors">
                  {method.value}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <i className="ri-arrow-right-line text-xl text-green-400 transition-colors duration-300"></i>
              </div>
            </div>

            {/* Hover Effect Overlay - Shine */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-full group-hover:translate-x-full"></div>
          </a>
        ))}
      </div>
      {/* END */}

     

      {/* Information Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Quick Response Box */}
        <div 
          className="group bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 flex items-start gap-4 hover:bg-zinc-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="700"
        >
          <div className="w-10 h-10 bg-green-500/10 group-hover:bg-green-500/20 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
            <i className="ri-checkbox-circle-fill text-green-400 text-xl"></i>
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">Quick Response</h4>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              Saya biasanya merespons dalam 24 jam. Saya menantikan pesan dari Anda!
            </p>
          </div>
        </div>

        {/* Available Now Box */}
        <div 
          className="group bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 flex items-start gap-4 hover:bg-zinc-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <div className="w-10 h-10 bg-green-500/10 group-hover:bg-green-500/20 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
            <i className="ri-time-line text-green-400 text-xl"></i>
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">Available Now</h4>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              Saat ini menerima project dan kolaborasi baru. Mari diskusikan ide Anda!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
