function ContactMe() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A] mb-2">
            Contact Me
          </h2>
          <p className="text-[#5F6C67]">Get in touch</p>
        </div>

        {/* Contact Info */}
        <div className="max-w-md md:max-w-none mx-auto md:grid md:grid-cols-3 md:gap-8 space-y-8 md:space-y-0">
          {/* Call Me */}
          <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center">
            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-lg bg-indigo-50 text-[#6B8E7F]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#2C3E3A] mb-1">
                Call Me
              </h3>
              <a 
                href="tel:+254793758835" 
                className="text-base text-[#5F6C67]"
              >
                +254-704-207-486
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center">
            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-lg bg-indigo-50 text-[#6B8E7F]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#2C3E3A] mb-1">
                Email
              </h3>
              <a 
                href="mailto:muindetuva@gmail.com" 
                className="text-base text-[#5F6C67] break-all"
              >
                cynmumbua@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center">
            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-lg bg-indigo-50 text-[#6B8E7F]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#2C3E3A] mb-1">
                Location
              </h3>
              <p className="text-base text-gray-600">
                Nairobi - Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;