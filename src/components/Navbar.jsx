import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        setIsMenuOpen(false); // Tutup menu saat link diklik
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo flex items-center gap-2">
                <img src="/assets/Logo-Nym.png" alt="Logo" className="object-contain rounded-full w-10 md:w-12"/>
                <h1 className="text-2xl font-bold"></h1>
            </div>
            
            {/* Hamburger Button - Mobile Only, di sebelah kanan */}
            <button
                onClick={toggleMenu}
                className="md:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            <ul className={`
                menu flex items-center sm:gap-10 gap-4
                md:static md:opacity-100 md:translate-x-0 md:flex
                fixed left-1/2 -translate-x-1/2
                bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl
                transition-all duration-300 md:bg-transparent md:transition-none
                z-40 
                ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}
                ${isMenuOpen ? "top-20 opacity-100 flex md:flex" : "top-20 opacity-0 hidden md:flex"}
            `}>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
            </ul>
        </div>
    );
};

export default Navbar;