import { useState } from 'react';

function Skills() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const Developer = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Vue JS', level: 80 },
    { name: 'Bootstrap', level: 92 },
    { name: 'Tailwind CSS', level: 87 }
  ];

  const TechnicalSupport = [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PHP', level: 75 },
    { name: 'MongoDB', level: 82 },
    { name: 'MySQL', level: 88 },
    { name: 'REST APIs', level: 90 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Linux', level: 90 }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
          Skills
        </h2>
        <p className="text-center text-gray-600 mb-12 md:mb-16">
          My technical level
        </p>

        {/* Skills Container */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Frontend Developer */}
          <div className=" ">
            <button
              onClick={() => toggleSection('frontend')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl md:text-3xl text-indigo-900">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-900">
                  Developer
                </span>
              </div>
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform ${
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
                openSection === 'frontend' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 space-y-4">
                {Developer.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-900 h-2 rounded-full transition-all duration-500"
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
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl md:text-3xl text-indigo-900">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-900">
                  Technical Support
                </span>
              </div>
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform ${
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
                openSection === 'backend' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 space-y-4">
                {TechnicalSupport.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-900 h-2 rounded-full transition-all duration-500"
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