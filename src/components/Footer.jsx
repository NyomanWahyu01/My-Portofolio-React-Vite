import { useState } from "react";


const Footer = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <footer data-aos="fade-up" data-aos-duration="1000">
      <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <div className="logo flex items-center gap-2">
                <img src="/assets/Logo-Nym.png" alt="Logo" className="object-contain rounded-full w-10 md:w-12"/>
                <h1 className="text-2xl font-bold"></h1>
            </div>

        <div 
          className="flex gap-7" 
          data-aos="fade-up" 
          data-aos-duration="2000" 
          data-aos-delay="200"
          data-aos-easing="ease-out-cubic">
          <a 
            href="#home"
            onClick={() => handleLinkClick("home")}
            className={`sm:text-lg text-base font-medium relative transition-all duration-300 ease-in-out
              ${activeLink === "home" 
                ? "text-blue-600 font-semibold" 
                : "text-gray-300 hover:text-blue-500"
              }
            `}
          >
            Home
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ease-in-out
              ${activeLink === "home" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
            `}></span>
          </a>
          <a 
            href="#about"
            onClick={() => handleLinkClick("about")}
            className={`sm:text-lg text-base font-medium relative transition-all duration-300 ease-in-out
              ${activeLink === "about" 
                ? "text-blue-600 font-semibold" 
                : "text-gray-300 hover:text-blue-500"
              }
            `}
          >
            About
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ease-in-out
              ${activeLink === "about" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
            `}></span>
          </a>
          <a 
            href="#project"
            onClick={() => handleLinkClick("project")}
            className={`sm:text-lg text-base font-medium relative transition-all duration-300 ease-in-out
              ${activeLink === "project" 
                ? "text-blue-600 font-semibold" 
                : "text-gray-300 hover:text-blue-500"
              }
            `}
          >
            Project
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ease-in-out
              ${activeLink === "project" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
            `}></span>
          </a>
          <a 
            href="#contact"
            onClick={() => handleLinkClick("contact")}
            className={`sm:text-lg text-base font-medium relative transition-all duration-300 ease-in-out
              ${activeLink === "contact" 
                ? "text-blue-600 font-semibold" 
                : "text-gray-300 hover:text-blue-500"
              }
            `}
          >
            Contact
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ease-in-out
              ${activeLink === "contact" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
            `}></span>
          </a>
        </div>
        <div 
          className="flex items-center gap-3" 
          data-aos="fade-left" 
          data-aos-duration="1000" 
          data-aos-delay="300"
          data-aos-easing="ease-out-cubic"
        >
          <a 
            href="https://wa.me/6285399101184?text=Halo,%20saya%20tertarik%20untuk%20berkolaborasi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-green-600"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <i className="ri-whatsapp-fill ri-2x"></i>
          </a>
          <a 
            href="https://www.instagram.com/inyoman_wahyu1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-pink-400"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/i-nyoman-wahyu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-blue-500"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
          <a 
            href="mailto:inyomanwahyu123@gmail.com"
            className="transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-red-400"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="700"
          >
            <i className="ri-mail-fill ri-2x"></i>
          </a>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer