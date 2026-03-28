import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/cynthia-muinde/",
    label: "LinkedIn",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/254704207486",
    label: "WhatsApp",
  },
  {
    icon: FaGithub,
    href: "https://github.com/cynmumbua",
    label: "GitHub",
  },
];

function Hero() {
  const containerRef = useRef(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const y = window.scrollY;
      containerRef.current.style.setProperty("--scroll-y", `${y * 0.15}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#FAFAF8] overflow-hidden flex items-center"
    >
      {/* Background typographic watermark */}
      <span
        aria-hidden="true"
        className="absolute -bottom-6 -right-4 font-['Cormorant_Garamond'] font-bold text-[clamp(80px,16vw,200px)] text-[#1C1917]/[0.04] leading-none select-none pointer-events-none tracking-tighter"
        style={{ transform: "translateY(var(--scroll-y, 0))" }}
      >
        Cynthia
      </span>

      {/* Decorative top-left corner line */}
      <div className="absolute top-24 left-6 md:left-16 lg:left-24 flex flex-col gap-1 opacity-30">
        <div className="w-8 h-px bg-[#B5956A]" />
        <div className="w-4 h-px bg-[#B5956A]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-24 pb-16">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-12 md:gap-16">

          {/* ── Left: Content ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl animate-[fadeSlideUp_0.8s_ease_forwards]">

            {/* Overline */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#B5956A]" />
              <p className="font-['Jost'] text-xs tracking-[0.25em] uppercase text-[#B5956A] font-medium">
                Technical Support · Fintech
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-['Cormorant_Garamond'] font-semibold text-[clamp(42px,6vw,76px)] text-[#1C1917] leading-[1.05] mb-6">
              Hi, I'm{" "}
              <span className="relative inline-block">
                Cynthia
                {/* Underline accent */}
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#B5956A] rounded-full" />
              </span>
              <span className="block text-[#78716C] font-light">Muinde.</span>
            </h1>

            {/* Bio */}
            <p className="font-['Jost'] text-[15px] text-[#78716C] leading-[1.8] mb-10 max-w-md">
              Tech support engineer with a fintech background — keeping systems reliable 
              by troubleshooting issues, monitoring performance, and supporting cloud & 
              on-prem applications. I work across databases, Linux environments, and 
              modern monitoring tools, and enjoy crafting clean, functional web experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
              <button
                onClick={scrollToContact}
                className="group relative overflow-hidden px-8 py-3.5 font-['Jost'] text-sm font-medium tracking-widest uppercase text-[#FAFAF8] bg-[#1C1917] border border-[#1C1917] transition-all duration-300 hover:bg-transparent hover:text-[#1C1917] cursor-pointer outline-none"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>

              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 font-['Jost'] text-sm font-medium tracking-widest uppercase text-[#1C1917] border border-[#1C1917]/30 transition-all duration-300 hover:border-[#1C1917] cursor-pointer no-underline"
              >
                View Work
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              <span className="font-['Jost'] text-xs tracking-widest uppercase text-[#A8A29E] mr-2">
                Follow
              </span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group w-9 h-9 flex items-center justify-center border border-[#E7E5E4] text-[#78716C] hover:border-[#1C1917] hover:text-[#1C1917] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="shrink-0 animate-[fadeSlideUp_0.8s_0.2s_ease_both]">
            <div className="relative">
              {/* Offset decorative frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#B5956A]/40" />
              <div className="absolute -bottom-3 -left-3 w-full h-full border border-[#1C1917]/10" />

              {/* Image container — square, not circle */}
              <div className="relative w-[240px] h-[300px] md:w-[340px] md:h-[420px] overflow-hidden bg-[#E8E4DC]">
                <img
                  src="Images/picture.jpeg"
                  alt="Cynthia Muinde"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                {/* Subtle tint overlay */}
                <div className="absolute inset-0 bg-[#1C1917]/5 pointer-events-none" />
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-5 -left-5 bg-[#1C1917] text-[#FAFAF8] px-4 py-3 shadow-lg">
                <p className="font-['Jost'] text-[10px] tracking-[0.2em] uppercase text-[#B5956A] mb-0.5">
                  Available for
                </p>
                <p className="font-['Cormorant_Garamond'] text-base font-semibold leading-tight">
                  Freelance & Full-time
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="font-['Jost'] text-[10px] tracking-[0.2em] uppercase text-[#78716C]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#78716C] to-transparent" />
      </div>
    </section>
  );
}

export default Hero;