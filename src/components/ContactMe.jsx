import { useEffect, useRef, useState } from "react";

const contacts = [
  {
    label: "Phone",
    value: "+254 704 207 486",
    href: "tel:+254704207486",
    external: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "cynmumbua@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=cynmumbua@gmail.com",
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Nairobi, Kenya",
    href: "https://www.google.com/maps/search/?api=1&query=Nairobi,Kenya",
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

function ContactMe() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-[#1C1917] overflow-hidden">

      {/* Decorative large text watermark */}
      <span
        aria-hidden="true"
        className="absolute -bottom-8 -right-4 font-['Cormorant_Garamond'] font-bold text-[clamp(80px,16vw,220px)] text-white/3 leading-none select-none pointer-events-none tracking-tighter"
      >
        Contact
      </span>

      {/* Vertical rule */}
      <div className="absolute top-0 left-6 md:left-16 lg:left-24 h-full w-px bg-white/10 pointer-events-none" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#B5956A]" />
          <p className="font-['Jost'] text-xs tracking-[0.25em] uppercase text-[#B5956A] font-medium">
            Get In Touch
          </p>
        </div>

        {/* Heading + subtext */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <h2 className="font-['Cormorant_Garamond'] font-semibold text-[clamp(36px,5vw,60px)] text-[#FAFAF8] leading-[1.1]">
            Let's work<br />
            <span className="text-[#B5956A] font-light">together.</span>
          </h2>
          <p className="font-['Jost'] text-sm text-[#A8A29E] max-w-sm leading-relaxed md:text-right">
            Available for full-time roles and freelance projects. 
            Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {contacts.map(({ label, value, href, external, icon }, i) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
              className={`group relative border border-white/10 p-7 hover:border-[#B5956A]/60 transition-all duration-500 no-underline
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                transition-all duration-700 ease-out`}
            >
              {/* Top-left corner accent */}
              <span className="absolute top-0 left-0 w-0 h-px bg-[#B5956A] group-hover:w-full transition-all duration-500 ease-out" />
              <span className="absolute top-0 left-0 w-px h-0 bg-[#B5956A] group-hover:h-full transition-all duration-500 ease-out delay-100" />

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center border border-white/10 text-[#B5956A] mb-6 group-hover:border-[#B5956A]/50 transition-colors duration-300">
                {icon}
              </div>

              {/* Label */}
              <p className="font-['Jost'] text-[10px] tracking-[0.25em] uppercase text-[#78716C] mb-2">
                {label}
              </p>

              {/* Value */}
              <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#FAFAF8] group-hover:text-[#B5956A] transition-colors duration-300 leading-tight break-all">
                {value}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                <span className="font-['Jost'] text-[10px] tracking-[0.2em] uppercase text-[#B5956A]">Open</span>
                <svg className="w-3 h-3 text-[#B5956A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom divider + availability note */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-['Jost'] text-sm text-[#A8A29E]">
              Currently available for new opportunities
            </span>
          </div>
          <p className="font-['Jost'] text-xs text-[#57534E] tracking-wide">
            Response within 24 hours
          </p>
        </div>

      </div>
    </section>
  );
}

export default ContactMe;