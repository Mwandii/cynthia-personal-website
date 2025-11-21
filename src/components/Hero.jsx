import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 min-h-screen px-6 mt-8 md:px-16 lg:px-24 pt-20 md:pt-16 pb-12 bg-[#F9FAFB] max-w-7xl">
        
        {/* Left side: Text content and social icons */}
        <div className="flex flex-col items-center md:items-start max-w-lg">
          {/* Social icons - stacked vertically on both mobile and desktop */}
          <div className="flex md:flex-col gap-4 md:gap-4 mb-5 md:mb-6 text-xl md:text-2xl">
            <a
              href="https://www.linkedin.com/in/cynthia-muinde/"
              target="_blank"
              rel="noreferrer"
              className="text-[#5F6C67] hover:text-[#6B8E7F] transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/CyntiaMumbua"
              target="_blank"
              rel="noreferrer"
              className="text-[#5F6C67] hover:text-[#6B8E7F] transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/cynmumbua"
              target="_blank"
              rel="noreferrer"
              className="text-[#5F6C67] hover:text-[#6B8E7F] transition-colors"
            >
              <FaGithub />
            </a>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-[#2C3E3A]">
              Hi I'm Cynthia
            </h1>
            <h2 className="text-sm md:text-base text-[#5F6C67] font-semibold mb-5">
              Technical Support | Fintech
            </h2>
            <p className="text-sm md:text-base text-[#5F6C67] mb-6 leading-relaxed max-w-md">
             I am a tech support engineer with a fintech background, focused on keeping systems reliable by troubleshooting issues, monitoring performance, and supporting both cloud and on-prem applications. I work across databases, Linux environments, and modern monitoring tools, and I enjoy building user-friendly web experiences with HTML, CSS, Javascript, Wordpress, Node.js, Vue.js, and Java. I love solving problems, improving performance and creating clean, functional digital solutions.
            </p>
            <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
             className="bg-[#6B8E7F] text-white px-7 py-4 rounded-full font-medium hover:bg-[#4A6B5E] cursor-pointer hover:shadow-md hover:-translate-y-1 shadow-[#A8C5B8] transition-colors inline-flex items-center gap-2">
              Contact Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side: Profile image */}
        <div className="shrink-0">
          <div className="relative">
            <div className="bg-[#6B8E7F] shadow-[0_8px_24px_#00000025] rounded-full w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden">
              <img
                src="/Images/cynthia1.jpeg"
                alt="Cynthia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  );
}

export default Hero;