import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? " shadow-md" : " shadow-none"
      }`}>
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-4">
        <h1 href="/" className="text-xl md:text-2xl font-bold text-black cursor-pointer">Cynthia Muinde</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base">
          <li>
            <a href="#about" className="relative text-[#1a1a1a] px-3 py-2 font-medium
             after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full
             after:bg-[#1a1a1a] after:opacity-0 after:scale-x-0
             after:origin-left after:transition-all after:duration-300
             hover:after:opacity-100 hover:after:scale-x-100">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="relative text-[#1a1a1a] px-3 py-2 font-medium
             after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full
             after:bg-[#1a1a1a] after:opacity-0 after:scale-x-0
             after:origin-left after:transition-all after:duration-300
             hover:after:opacity-100 hover:after:scale-x-100">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="relative text-[#1a1a1a] px-3 py-2 font-medium
             after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full
             after:bg-[#1a1a1a] after:opacity-0 after:scale-x-0
             after:origin-left after:transition-all after:duration-300
             hover:after:opacity-100 hover:after:scale-x-100">
              Contact Me
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#2D5016] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#2D5016] transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#2D5016] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col bg-[#F7F5F2] border-t border-[#C4D7B2]">
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="block px-6 py-3 hover:bg-[#C4D7B2] text-[#1a1a1a] hover:text-[#2D5016] transition-colors font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={closeMenu}
              className="block px-6 py-3 hover:bg-[#C4D7B2] text-[#1a1a1a] hover:text-[#2D5016] transition-colors font-medium"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block px-6 py-3 hover:bg-[#C4D7B2] text-[#1a1a1a] hover:text-[#2D5016] transition-colors font-medium"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block px-6 py-3 hover:bg-[#C4D7B2] text-[#1a1a1a] hover:text-[#2D5016] transition-colors font-medium"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;