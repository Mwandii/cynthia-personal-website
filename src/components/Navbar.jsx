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
        isScrolled ? "bg-white/70 shadow-md" : "bg-white/20 shadow-none"
      }`}>
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-4">
        <h1 href="/" className="text-xl md:text-2xl font-bold text-[#2C3E3A] cursor-pointer">Cynthia Muinde</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base">
          <li>
            <a href="#about" className="text-[#5F6C67] hover:text-[#6B8E7F] transition-colors px-3 py-2">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-[#5F6C67] hover:text-[#6B8E7F] transition-colors px-3 py-2">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#5F6C67] hover:text-[#6B8E7F] transition-colors px-3 py-2">
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
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
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
        <ul className="flex flex-col bg-white border-t border-gray-100">
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="block px-6 py-3 hover:bg-indigo-50 text-[#5F6C67] hover:text-[#6B8E7F] transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={closeMenu}
              className="block px-6 py-3 hover:bg-indigo-50 text-[#5F6C67] hover:text-[#6B8E7F] transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block px-6 py-3 hover:bg-indigo-50 text-[#5F6C67] hover:text-[#6B8E7F] transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block px-6 py-3 hover:bg-indigo-50 text-[#5F6C67] hover:text-[#6B8E7F] transition-colors"
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