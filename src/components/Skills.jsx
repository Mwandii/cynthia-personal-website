import { useState } from 'react';

function Skills() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const Developer = [
    { name: 'Grafana', level: 70 },
    { name: 'Python', level: 85 },
    { name: 'ELK', level: 90 },
    { name: 'Cloud Support(AWS & Huawei Cloud)', level: 90 },
    { name: 'On prem Support', level: 95 },
    { name: 'Database Management (oracle, PostgreSL, MySQL, myssl, Cassandra, mongoDB)', level: 95 },
    { name: 'Tibco', level: 95 },
    { name: 'Openshift', level: 95 },
    { name: 'Linux', level: 90 },
    { name: 'Technical Troubleshooting', level: 95 },
  ];

  const TechnicalSupport = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Vue JS', level: 90 },
    { name: 'Bootstrap', level: 92 },
    { name: 'Tailwind CSS', level: 87 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 85 },
    { name: 'REST APIs', level: 90 },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C3E3A] mb-3">
          Skills
        </h2>
        <p className="text-center text-[#5F6C67] mb-12 md:mb-16">
          My technical level
        </p>

        {/* Skills Container */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Frontend Developer */}
          <div className="">
            <button
              onClick={() => toggleSection('frontend')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 hover:cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl md:text-3xl text-[#6B8E7F]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-semibold text-[#2C3E3A]">
                  Technical Support
                </span>
              </div>
              <svg
                className={`w-6 h-6 text-[#6B8E7F] transition-transform ${
                  openSection === 'frontend' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Frontend Skills Dropdown */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSection === 'frontend' ? 'max-h-96 overflow-y-auto' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 flex flex-col gap-4">
                {Developer.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-[#2C3E3A]">{skill.name}</span>
                      <span className="text-sm text-[#5F6C67]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#E8EDE9] rounded-full h-2">
                      <div
                        className="bg-[#6B8E7F] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Support */}
          <div className="">
            <button
              onClick={() => toggleSection('backend')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 hover:cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl md:text-3xl text-[#6B8E7F]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-semibold text-[#2C3E3A]">
                  Developer
                </span>
              </div>
              <svg
                className={`w-6 h-6 text-[#6B8E7F] transition-transform ${
                  openSection === 'backend' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Backend Skills Dropdown */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSection === 'backend' ? 'max-h-96 overflow-y-auto' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 flex flex-col gap-4">
                {TechnicalSupport.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-[#2C3E3A]">{skill.name}</span>
                      <span className="text-sm text-[#5F6C67]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#E8EDE9] rounded-full h-2">
                      <div
                        className="bg-[#6B8E7F] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;