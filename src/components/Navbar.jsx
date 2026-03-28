import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, isMenuOpen ? 300 : 0);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-md  border-[#E8E4DC]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Wordmark */}
            <a
              href="/"
              className="group flex items-center gap-2 no-underline"
              aria-label="Cynthia Muinde - Home"
            >
              {/* Decorative dot accent */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#B5956A] transition-transform duration-300 group-hover:scale-150" />
              <span className="font-['Cormorant_Garamond'] font-semibold text-xl md:text-2xl tracking-wide text-[#1C1917] leading-none">
                Cynthia
              </span>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="relative px-4 py-2 text-sm font-['Jost'] font-medium tracking-widest uppercase text-[#44403C] transition-colors duration-200 hover:text-[#1C1917] group cursor-pointer bg-transparent border-none outline-none"
                  >
                    {label}
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-[#B5956A] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </button>
                </li>
              ))}

              {/* CTA */}
              <li className="ml-4">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="px-5 py-2 text-sm font-['Jost'] font-medium tracking-widest uppercase text-[#FAFAF8] bg-[#1C1917] border border-[#1C1917] transition-all duration-300 hover:bg-transparent hover:text-[#1C1917] cursor-pointer outline-none"
                >
                  Hire Me
                </button>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer bg-transparent border-none outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block w-6 h-px bg-[#1C1917] transition-all duration-300 origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block w-4 h-px bg-[#1C1917] transition-all duration-300 self-end ${
                  isMenuOpen ? "opacity-0 translate-x-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-[#1C1917] transition-all duration-300 origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#1C1917]/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          ref={menuRef}
          className={`absolute top-0 right-0 bottom-0 w-72 bg-[#FAFAF8] flex flex-col transition-transform duration-400 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-8 h-16 border-b border-[#E8E4DC]">
            <span className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#1C1917] tracking-wide">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-[#78716C] hover:text-[#1C1917] transition-colors bg-transparent border-none cursor-pointer outline-none"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col px-8 pt-8 gap-1">
            {navLinks.map(({ label, href }, i) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                style={{ transitionDelay: isMenuOpen ? `${i * 60 + 100}ms` : "0ms" }}
                className={`text-left py-4 font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1C1917] border-b border-[#E8E4DC] hover:text-[#B5956A] transition-all duration-300 bg-transparent border-x-0 border-t-0 cursor-pointer outline-none ${
                  isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto px-8 pb-10">
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full py-3 text-sm font-['Jost'] font-medium tracking-widest uppercase text-[#FAFAF8] bg-[#1C1917] border border-[#1C1917] transition-all duration-300 hover:bg-transparent hover:text-[#1C1917] cursor-pointer outline-none"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;