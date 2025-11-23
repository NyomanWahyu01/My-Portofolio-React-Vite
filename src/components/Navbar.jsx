import { useState, useEffect } from "react";
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [activeLink, setActiveLink] = useState("");

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
    };

    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo flex items-center gap-2">
                <img src="/assets/Logo-Nym.png" alt="Logo" className="object-contain rounded-full w-10 md:w-12"/>
                <h1 className="text-2xl font-bold"></h1>
            </div>
            <ul className={`
                menu flex items-center sm:gap-10 gap-4
                md:static md:opacity-100 md:translate-x-0
                fixed left-1/2 -translate-x-1/2
                bg-white/30 backdrop-blur-md p-4 rounded-br-2xl
                transition-all duration-300 md:bg-transparent md:transition-none
                z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}
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