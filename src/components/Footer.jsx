import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/cynthia-muinde/", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/254704207486", label: "WhatsApp" },
  { icon: FaGithub, href: "https://github.com/cynmumbua", label: "GitHub" },
];

function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141210] text-[#FAFAF8]">

      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B5956A]" />
              <span className="font-['Cormorant_Garamond'] font-semibold text-2xl tracking-wide text-[#FAFAF8]">
                Cynthia Muinde
              </span>
            </div>
            <p className="font-['Jost'] text-xs tracking-[0.2em] uppercase text-[#57534E]">
              Technical Support · Fintech
            </p>
            <p className="font-['Jost'] text-sm text-[#78716C] leading-relaxed max-w-xs mt-2">
              Keeping systems reliable and building clean digital experiences from Nairobi, Kenya.
            </p>

            {/* Availability pill */}
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-['Jost'] text-xs text-[#57534E]">Available for opportunities</span>
            </div>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div className="flex flex-col gap-3">
            <p className="font-['Jost'] text-[10px] tracking-[0.25em] uppercase text-[#B5956A] mb-2">
              Navigate
            </p>
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="group inline-flex items-center gap-2 font-['Jost'] text-sm text-[#78716C] hover:text-[#FAFAF8] transition-colors duration-200 no-underline w-fit"
              >
                <span className="w-0 h-px bg-[#B5956A] group-hover:w-4 transition-all duration-300" />
                {label}
              </a>
            ))}
          </div>

          {/* ── Col 3: Contact + Social ── */}
          <div className="flex flex-col gap-3">
            <p className="font-['Jost'] text-[10px] tracking-[0.25em] uppercase text-[#B5956A] mb-2">
              Connect
            </p>
            <a
              href="tel:+254704207486"
              className="font-['Jost'] text-sm text-[#78716C] hover:text-[#FAFAF8] transition-colors duration-200 no-underline"
            >
              +254 704 207 486
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cynmumbua@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="font-['Jost'] text-sm text-[#78716C] hover:text-[#FAFAF8] transition-colors duration-200 no-underline"
            >
              cynmumbua@gmail.com
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-[#78716C] hover:border-[#B5956A]/60 hover:text-[#B5956A] transition-all duration-200 no-underline"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['Jost'] text-xs text-[#57534E]">
            © {new Date().getFullYear()} Cynthia Muinde. All rights reserved.
          </p>
          <p className="font-['Jost'] text-xs text-[#57534E]">
            Nairobi, Kenya
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;