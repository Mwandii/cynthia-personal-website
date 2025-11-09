import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 min-h-screen px-6 mt-8 mx-10 md:px-16 lg:px-24 pt-20 md:pt-16 pb-12 bg-white text-gray-800 max-w-7xl">
        
        {/* Left side: Text content and social icons */}
        <div className="flex flex-col items-center md:items-start max-w-lg">
          {/* Social icons - stacked vertically on both mobile and desktop */}
          <div className="flex md:flex-col gap-4 md:gap-4 mb-5 md:mb-6 text-lg md:text-xl text-gray-700">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-500 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              <FaGithub />
            </a>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900">
              Hi I'm Cynthia
            </h1>
            <h2 className="text-sm md:text-base font-normal text-gray-600 mb-5">
              IT Support Specialist & Software Developer
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed max-w-md">
              Experienced in providing comprehensive technical support and building
              modern web applications. Skilled in troubleshooting, system
              maintenance, and full-stack development with a focus on delivering
              reliable solutions.
            </p>
            <button className="bg-indigo-900 text-white px-6 py-2.5 rounded-md font-medium hover:bg-indigo-800 transition-colors inline-flex items-center gap-2">
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
            <div className="bg-indigo-900 rounded-full w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMHRlY2glMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
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