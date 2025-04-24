import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Accountant',
    company: 'Blackline Corporation',
    location: 'Ontario, Canada',
    period: 'Apr 2024 - Present',
    responsibilities: [
      'Managed invoicing, reconciliations, and PAD reports using Yardi.',
      'Prepared cash flow projections and assisted in financial statements.',
      'Coordinated invoice approvals and cheque processing.',
    ],
    current: true,
  },
  {
    id: 2,
    title: 'Accounting Associate',
    company: 'Walmart Inc.',
    location: 'Ontario, Canada',
    period: 'Mar 2024 - Present',
    responsibilities: [
      'Handled store funds, end-of-day reconciliations, and deposits.',
      'Ensured cash compliance and resolved discrepancies.',
    ],
    current: true,
  },
  {
    id: 3,
    title: 'Accountant',
    company: 'J.K. & SONS',
    location: 'India',
    period: 'Sep 2019 - 2021',
    responsibilities: [
      'Managed ₹1.5M in sales and AR.',
      'Conducted monthly reconciliations; used Tally for ledger tracking.',
      'Generated Excel-based financial reports and trend analysis.',
    ],
    current: false,
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A2342]">Professional Experience</h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My career journey includes roles at established organizations where I've developed and applied my accounting expertise.
          </p>
        </div>

        {/* Grid-Based Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              {exp.current && (
                <div className="absolute top-4 right-4 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                  Current
                </div>
              )}

              <h3 className="text-xl font-semibold text-[#0A2342] mb-1">{exp.title}</h3>

              <div className="flex items-center text-sm text-gray-700 mb-1">
                <Briefcase size={16} className="mr-2 text-[#E6AF2E]" />
                <span>{exp.company}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar size={16} className="mr-2 text-[#E6AF2E]" />
                <span>{exp.period}</span>
              </div>

              <p className="text-sm text-gray-500 italic mb-3">{exp.location}</p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
