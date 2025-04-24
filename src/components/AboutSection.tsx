import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary">About Me</h2>
          <div className="w-28 h-1 mt-4 bg-brand-accent mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left - Profile Card */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                src="./DivyPic.jpeg"
                alt="Divy Raj Johari - Professional Profile"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 text-white">
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                 
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-brand-primary mb-3">Professional Profile</h3>
              <p className="text-brand-text text-base leading-relaxed mb-4">
                I am a detail-oriented accountant with hands-on experience at organizations like Blackline Corporation and Walmart Inc. My expertise spans reconciliations, invoicing, reporting, and cash flow projections.
              </p>
              <p className="text-brand-text text-base leading-relaxed mb-4">
                I bring proficiency in tools like Yardi, QuickBooks, Excel, and Tally, coupled with experience in stakeholder coordination and strategic financial analysis.
              </p>
              <p className="text-brand-text text-base leading-relaxed">
                I hold postgraduate credentials in Accounting from York University and Business Management from Conestoga College, building on a BBA from St. Xavier's College in India. I'm also continually learning tools like Power BI and QuickBooks to stay current.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-lg font-semibold text-brand-primary mb-2">Professional Interests</h4>
                <ul className="list-disc list-inside text-brand-text space-y-1 text-base">
                  <li>Financial Analysis</li>
                  <li>Tax Planning</li>
                  <li>Business Advisory</li>
                  <li>Corporate Accounting</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-brand-primary mb-2">Personal Interests</h4>
                <ul className="list-disc list-inside text-brand-text space-y-1 text-base">
                  <li>Stock Trading</li>
                  <li>Portfolio Management</li>
                  <li>E-Commerce (Razlot.com)</li>
                  <li>Tech Events & Reading</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
