import { useEffect, useRef, useState } from "react";

const technicalSupport = [
  { name: "Technical Troubleshooting", level: 95 },
  { name: "Database Management", level: 95 },
  { name: "Linux", level: 90 },
  { name: "Cloud Support (AWS & Huawei)", level: 90 },
  { name: "ELK Stack", level: 90 },
  { name: "OpenShift", level: 95 },
  { name: "Tibco", level: 95 },
  { name: "On-prem Support", level: 95 },
  { name: "Python", level: 85 },
  { name: "Grafana", level: 70 },
];

const developer = [
  { name: "HTML & CSS", level: 90 },
  { name: "Vue.js", level: 90 },
  { name: "REST APIs", level: 90 },
  { name: "Bootstrap", level: 92 },
  { name: "React", level: 88 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 87 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 85 },
];

function SkillBar({ name, level, animate }) {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-['Jost'] text-sm text-[#44403C] group-hover:text-[#1C1917] transition-colors duration-200">
          {name}
        </span>
        <span className="font-['Cormorant_Garamond'] text-base font-semibold text-[#B5956A]">
          {level}%
        </span>
      </div>
      {/* Track */}
      <div className="relative h-px bg-[#E8E4DC] w-full overflow-visible">
        {/* Fill */}
        <div
          className="absolute top-0 left-0 h-px bg-[#1C1917] transition-all duration-700 ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
        {/* Dot at end of bar */}
        <div
          className="absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-[#B5956A] transition-all duration-700 ease-out"
          style={{ left: animate ? `calc(${level}% - 3.5px)` : "0%" }}
        />
      </div>
    </div>
  );
}

function SkillColumn({ title, subtitle, skills, delay = 0 }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setAnimate(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Column header */}
      <div className="mb-8 pb-6 border-b border-[#E8E4DC]">
        <p className="font-['Jost'] text-[10px] tracking-[0.25em] uppercase text-[#B5956A] mb-2">
          {subtitle}
        </p>
        <h3 className="font-['Cormorant_Garamond'] font-semibold text-[28px] text-[#1C1917] leading-tight">
          {title}
        </h3>
      </div>

      {/* Skill bars */}
      <div className="flex flex-col gap-6">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} animate={animate} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 bg-[#F5F3EF] overflow-hidden">

      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#B5956A]" />
          <p className="font-['Jost'] text-xs tracking-[0.25em] uppercase text-[#B5956A] font-medium">
            Expertise
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-20">
          <h2 className="font-['Cormorant_Garamond'] font-semibold text-[clamp(36px,5vw,60px)] text-[#1C1917] leading-[1.1]">
            Skills &{" "}
            <span className="text-[#78716C] font-light">Capabilities</span>
          </h2>
          <p className="font-['Jost'] text-sm text-[#A8A29E] max-w-xs leading-relaxed md:text-right">
            A snapshot of the tools and technologies I work with daily.
          </p>
        </div>

        {/* Two-column skill grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          <SkillColumn
            title="Technical Support"
            subtitle="Infrastructure & Ops"
            skills={technicalSupport}
            delay={0}
          />
          <SkillColumn
            title="Development"
            subtitle="Frontend & Backend"
            skills={developer}
            delay={150}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;