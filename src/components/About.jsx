function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C3E3A] mb-12 md:mb-16">
          About Me
        </h2>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row  gap-8 md:gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full  flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
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
              <button className="bg-[#6B8E7F] text-white px-8 py-3 rounded-md font-medium hover:bg-[#4A6B5E] hover:animate-bounce hover:cursor-pointer transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg">
                <svg 
                  className="w-5 h-5" 
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