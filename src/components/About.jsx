import { useEffect, useRef } from "react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Issues Resolved Daily" },
  { value: "99%", label: "Uptime Maintained" },
];

function About() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const elements = [imageRef.current, contentRef.current].filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerInstance.unobserve(entry.target); // stop observing after animation
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px", // smoother trigger
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-[#FAFAF8] overflow-hidden"
    >
      {/* Decorative vertical rule */}
      <div className="absolute top-0 left-6 md:left-16 lg:left-24 h-full w-px bg-[#E8E4DC] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#B5956A]" />
          <p className="font-['Jost'] text-xs tracking-[0.25em] uppercase text-[#B5956A] font-medium">
            About Me
          </p>
        </div>

        <h2 className="font-['Cormorant_Garamond'] font-semibold text-[clamp(36px,5vw,60px)] text-[#1C1917] leading-[1.1] mb-16 md:mb-20">
          The person behind<br />
          <span className="text-[#78716C] font-light">the support ticket.</span>
        </h2>

        {/* Main content grid */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 items-start">

          {/* ── Image ── */}
          <div
            ref={imageRef}
            className="w-full md:w-5/12 shrink-0 opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
          >
            <div className="relative">
              {/* Offset frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#B5956A]/30" />

              <div className="relative overflow-hidden bg-[#E8E4DC]">
                <img
                  src="/Images/cynthia2.jpeg"
                  alt="Cynthia Muinde"
                  className="w-full h-[340px] md:h-[460px] object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1C1917]/5 pointer-events-none" />
              </div>

              {/* Stats strip */}
              <div className="relative bg-[#1C1917] px-6 py-5 grid grid-cols-3 gap-4">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#B5956A] leading-none mb-1">
                      {value}
                    </p>
                    <p className="font-['Jost'] text-[10px] tracking-[0.15em] uppercase text-[#A8A29E] leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Text content ── */}
          <div
            ref={contentRef}
            className="w-full md:w-7/12 opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
          >
            <p className="font-['Jost'] text-[15px] text-[#78716C] leading-[1.9] mb-6">
              I'm a tech support engineer with a fintech background — the kind of person
              who genuinely enjoys untangling a gnarly incident at 2am and writing a 
              clean post-mortem by morning. I work across databases, Linux environments, 
              and modern monitoring stacks, keeping systems reliable and teams unblocked.
            </p>

            <p className="font-['Jost'] text-[15px] text-[#78716C] leading-[1.9] mb-10">
              Beyond support, I'm passionate about web — building user-friendly 
              interfaces with HTML, CSS, JavaScript, Vue.js, and Node.js. I believe 
              good engineering is about more than fixing what's broken; it's about 
              leaving things better than you found them.
            </p>

            <a
              href="/cv/Cynthia Mumbua Resume.pdf"
              download
              className="group inline-flex items-center gap-3 px-8 py-3.5 font-['Jost'] text-sm font-medium tracking-widest uppercase text-[#FAFAF8] bg-[#1C1917] border border-[#1C1917] transition-all duration-300 hover:bg-transparent hover:text-[#1C1917] no-underline"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;