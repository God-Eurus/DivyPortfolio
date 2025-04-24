import React from 'react';
import { Calculator, PieChart, FileTextIcon, DollarSign, TrendingUp, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Financial Reporting',
    description: 'Comprehensive financial statements preparation and analysis for better decision-making.',
    icon: <FileTextIcon size={36} className="text-[#E6AF2E]" />,
  },
  {
    id: 2,
    title: 'Reconciliations',
    description: 'Thorough bank and credit card reconciliations to ensure accuracy of financial records.',
    icon: <Calculator size={36} className="text-[#E6AF2E]" />,
  },
  {
    id: 3,
    title: 'Cash Flow Forecasting',
    description: 'Strategic cash flow projections to help manage liquidity and plan for future needs.',
    icon: <TrendingUp size={36} className="text-[#E6AF2E]" />,
  },
  {
    id: 4,
    title: 'AP/AR Management',
    description: 'Efficient management of accounts payable and receivable processes.',
    icon: <DollarSign size={36} className="text-[#E6AF2E]" />,
  },
  {
    id: 5,
    title: 'Financial Analysis',
    description: 'In-depth analysis of financial data to identify trends and opportunities for improvement.',
    icon: <PieChart size={36} className="text-[#E6AF2E]" />,
  },
  {
    id: 6,
    title: 'Compliance Support',
    description: 'Assistance with financial regulations and compliance requirements.',
    icon: <ShieldCheck size={36} className="text-[#E6AF2E]" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0A2342]">Services Offered</h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I provide a range of accounting and financial services tailored to meet the specific needs of individuals and businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#0A2342]">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#0A2342] text-white rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Need Customized Accounting Services?</h3>
              <p className="mb-4">
                I offer tailored accounting solutions to meet your specific financial needs and challenges. Let's discuss how I can help you achieve your financial goals.
              </p>
            </div>
            <div className="text-center">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#E6AF2E] hover:bg-[#d9a429] text-[#0A2342] font-semibold py-3 px-8 rounded-md transition-all transform hover:scale-105 shadow-lg w-full"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;