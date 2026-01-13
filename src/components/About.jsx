function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 md:mb-16">
          About Me
        </h2>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row  gap-8 md:gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full  flex justify-center items-center">
            <div className="relative w-72 h-64 sm:w-96 md:w-110 md:h-80">
              <img
                src="/Images/cynthia2.jpeg"
                alt="Developer illustration"
                className="w-full h-full object-cover rounded-2xl shadow-[0_8px_24px_#6B8E7F26]"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <p className="text-base  text-[#5F6C67] leading-relaxed">
              Experienced in delivering technical support and building modern web 
              applications. Skilled in troubleshooting, system maintenance, and 
              full-stack development, with a focus on providing reliable solutions.
            </p>
            
            <p className="text-base text-[#5F6C67] leading-relaxed">
              I am passionate about creating seamless user experiences and solving 
              complex technical challenges. With a strong foundation in both frontend 
              and backend technologies, I bring ideas to life through clean, efficient code.
            </p>

            {/* CV Download Button */}
            <div className="pt-4">
              <a 
  href="/cv/Cynthia Mumbua Resume.pdf" 
  download
>
              <button
  className="
    group relative overflow-hidden rounded-md px-8 py-3 font-medium
    text-black border border-black
    inline-flex items-center gap-2
    transition-transform duration-300
    hover:-translate-y-1 hover:shadow-lg
    before:absolute before:inset-0
    before:bg-black hover:cursor-pointer
    before:scale-x-0 before:origin-left
    before:transition-transform before:duration-300
    hover:before:scale-x-100
  "
>
  <svg
    className="relative z-10 w-5 h-5 transition-colors duration-300 group-hover:text-white"
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

  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    Download CV
  </span>
</button>

              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;