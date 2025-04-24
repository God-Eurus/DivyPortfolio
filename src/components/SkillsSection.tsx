import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'Yardi', level: 90 },
  { name: 'QuickBooks', level: 85 },
  { name: 'Excel', level: 95 },
  { name: 'Tally', level: 90 },
  { name: 'Financial Reporting', level: 92 },
  { name: 'Bank Reconciliations', level: 95 },
];

const softSkills = [
  { name: 'Problem Solving', level: 90 },
  { name: 'Critical Thinking', level: 88 },
  { name: 'Communication', level: 85 },
  { name: 'Attention to Detail', level: 95 },
  { name: 'Time Management', level: 90 },
  { name: 'Teamwork', level: 88 },
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="flex justify-between mb-1">
      <span className="flex items-center gap-2 text-gray-700 font-medium">
        <CheckCircle size={16} className="text-[#E6AF2E]" />
        {name}
      </span>
      <span className="text-sm text-gray-600">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-[#E6AF2E] h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </motion.div>
);

const EducationCard: React.FC<{ title: string; place: string; badge?: string }> = ({ title, place, badge }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-1"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <div className="flex justify-between items-start mb-2">
      <h4 className="text-lg font-semibold text-[#0A2342]">{title}</h4>
      {badge && (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
    <p className="text-gray-600">{place}</p>
    <div className="w-12 h-1 bg-[#E6AF2E] mt-4"></div>
  </motion.div>
);

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0A2342]">Professional Skills</h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My diverse skill set combines technical accounting knowledge with essential soft skills for effective financial management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#0A2342] text-center">Technical Skills</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#0A2342] text-center">Soft Skills</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              {softSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-[#0A2342] text-center">Education & Certifications</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EducationCard title="PG Certificate, Accounting" place="York University" badge="2024" />
            <EducationCard title="PG Certificate, Global Business Management" place="Conestoga College" badge="2023" />
            <EducationCard title="BBA" place="St. Xavier's College, India" badge="2022" />
            <EducationCard title="QuickBooks Certification" place="LinkedIn Learning" badge="Ongoing" />
            <EducationCard title="Business Analysis Foundation" place="IIBA" badge="Completed" />
            <EducationCard title="Power BI" place="Self-Learning" badge="Ongoing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
