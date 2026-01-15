function Skills() {
  const Developer = [
    { name: 'Grafana', level: 70 },
    { name: 'Python', level: 85 },
    { name: 'ELK', level: 90 },
    { name: 'Cloud Support (AWS & Huawei Cloud)', level: 90 },
    { name: 'On prem Support', level: 95 },
    { name: 'Database Management (Oracle, PostgreSQL, MySQL, Cassandra, MongoDB)', level: 95 },
    { name: 'Tibco', level: 95 },
    { name: 'OpenShift', level: 95 },
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
    <section id="skills" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-3">
          Skills
        </h2>
        <p className="text-center text-[#2C3E3A] mb-12 md:mb-16">
          My technical level
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Technical Support */}
          <div className="bg-stone-50 p-6">
            <h3 className="text-lg md:text-xl font-semibold text-black mb-4">
              Technical Support
            </h3>

            <div className="flex flex-col gap-4 max-h-80 overflow-y-auto pr-2">
              {Developer.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-[#2C3E3A]">
                      {skill.name}
                    </span>
                    <span className="text-sm text-[#5F6C67]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-[#E8EDE9] rounded-full h-2">
                    <div
                      className="bg-[#2C3E3A] h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developer */}
          <div className="bg-stone-50 p-6">
            <h3 className="text-lg md:text-xl font-semibold text-black mb-4">
              Developer
            </h3>

            <div className="flex flex-col gap-4 max-h-80 overflow-y-auto pr-2">
              {TechnicalSupport.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-[#2C3E3A]">
                      {skill.name}
                    </span>
                    <span className="text-sm text-[#5F6C67]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-[#E8EDE9] rounded-full h-2">
                    <div
                      className="bg-[#2C3E3A] h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
