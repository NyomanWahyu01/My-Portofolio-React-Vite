const Contact = () => {

  const contactMethods = [
    {
      id: 1,
      name: "Email",
      icon: "ri-mail-send-fill",
      description: "Kirim pesan via email di bawah ini",
      value: "Klik untuk Pesan",
      href: "mailto:inyomanwahyu123@gmail.com",
      color: "red",
      delay: 400
    },
    {
      id: 2,
      name: "Instagram",
      icon: "ri-instagram-fill",
      description: "Follow My Instagram yah Guys",
      value: "Klik untuk Follow",
      href: "https://www.instagram.com/inyoman_wahyu1/",
      color: "pink",
      delay: 500
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: "ri-linkedin-fill",
      description: "Connect dengan saya Di Linkedin",
      value: "Klik untuk Connect",
      href: "https://www.linkedin.com/in/i-nyoman-wahyu",
      color: "blue",
      delay: 600
    },
    {
        id: 4,
        name: "WhatsApp",
        icon: "ri-phone-fill",
        description: "Chat langsung Via WhatsApp",
        value: "Klik untuk Chat",
        href: "https://wa.me/6285399101184?text=Halo,%20saya%20tertarik%20untuk%20berkolaborasi",
        color: "green",
        delay: 700
      },
  ];


  const getColorClasses = (color) => {
    const colors = {
      red: {
        bg: "from-red-500/20 to-red-600/10",
        border: "border-red-500/30 hover:border-red-500/60",
        iconBg: "bg-red-500/20 group-hover:bg-red-500/40",
        icon: "text-red-400 group-hover:text-red-300",
        text: "text-red-300 text-center",
        shadow: "hover:shadow-red-500/20",
        hoverBg: "group-hover:from-red-500/10 group-hover:to-red-600/5"
      },
      pink: {
        bg: "from-pink-500/20 to-purple-600/10",
        border: "border-pink-500/30 hover:border-pink-500/60",
        iconBg: "bg-pink-500/20 group-hover:bg-pink-500/30",
        icon: "text-pink-400 group-hover:text-pink-300",
        text: "text-pink-300 text-center",
        shadow: "hover:shadow-pink-500/20",
        hoverBg: "group-hover:from-pink-500/10 group-hover:to-purple-600/5"
      },
      blue: {
        bg: "from-blue-500/20 to-blue-600/10",
        border: "border-blue-500/30 hover:border-blue-500/60",
        iconBg: "bg-blue-500/20 group-hover:bg-blue-500/30",
        icon: "text-blue-400 group-hover:text-blue-300",
        text: "text-blue-300 text-center",
        shadow: "hover:shadow-blue-500/20",
        hoverBg: "group-hover:from-blue-500/10 group-hover:to-blue-600/5"
      },
      green: {
        bg: "from-green-500/20 to-green-600/10",
        border: "border-green-500/30 hover:border-green-500/60",
        iconBg: "bg-green-500/20 group-hover:bg-green-500/30",
        icon: "text-green-400 group-hover:text-green-300",
        text: "text-green-300 text-center",
        shadow: "hover:shadow-green-500/20",
        hoverBg: "group-hover:from-green-500/10 group-hover:to-green-600/5"
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {contactMethods.map((method) => {
        const colors = getColorClasses(method.color);
        return (
          <a
            key={method.id}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`group relative border ${colors.border} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg ${colors.shadow} overflow-hidden`}
            style={{
              background: method.color === 'red' ? 'linear-gradient(to bottom right, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.1))' :
                         method.color === 'pink' ? 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.1))' :
                         method.color === 'blue' ? 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1))' :

                         'linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.1))'
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={method.delay}
          >
            {/* Icon & Title Section */}
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center transition-colors duration-300`}>
                <i className={`${method.icon} text-3xl ${colors.icon} transition-colors duration-300`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{method.name}</h3>
                <p className="text-sm text-gray-400">{method.description}</p>
              </div>
            </div>

            {/* Value/Info Section */}
            <div className="mb-4 relative z-10">
              <p className={`${colors.text} font-medium break-all`}>{method.value}</p>
            </div>

            {/* Button */}
            <div
              className={`w-full py-2.5 px-4 ${colors.iconBg} border ${colors.border} rounded-lg text-white font-semibold transition-all duration-300 group-hover:scale-105 relative z-10 flex items-center justify-center gap-2 cursor-pointer`}
            >
              <span>Hubungi</span>
              <i className= {method.icon}></i>
            
            </div>

            {/* Hover Overlay */}
            <div 
              className="absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100"
              style={{
                background: method.color === 'red' ? 'linear-gradient(to bottom right, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05))' :
                           method.color === 'pink' ? 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.05))' :
                           method.color === 'blue' ? 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05))' :
                           'linear-gradient(to bottom right, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.05))'
              }}
            ></div>
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
