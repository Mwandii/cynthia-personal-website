import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-20 h-full px-6 md:px-24 py-16 bg-white text-gray-800">
      
      {/* Left side: Text content and social icons */}
      <div className="flex flex-col items-center md:items-start max-w-xl">
        {/* Social icons - stacked vertically on both mobile and desktop */}
        <div className="flex md:flex-col gap-4 md:gap-5 mb-6 md:mb-8 text-xl md:text-2xl text-gray-700">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-gray-900">
            Hi I'm Cynthia
          </h1>
          <h2 className="text-base md:text-lg font-normal text-gray-600 mb-6">
            IT Support Specialist & Software Developer
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed max-w-md">
            Experienced in providing comprehensive technical support and building
            modern web applications. Skilled in troubleshooting, system
            maintenance, and full-stack development with a focus on delivering
            reliable solutions.
          </p>
          <button className="bg-indigo-900 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-800 transition-colors inline-flex items-center gap-2">
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
          <div className="bg-indigo-900 rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_vector-1719858610210-ba3445e84822?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmwlMjB3ZWJzZGV2ZWxvcGVyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
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