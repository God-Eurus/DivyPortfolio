import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2342] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About Me */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Divy Raj Johari</h3>
            <p className="text-gray-300 text-sm mb-4 max-w-xs">
              Passionate about blending finance with tech to build insightful, data-driven solutions. Always eager to learn and collaborate.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a 
                  href="./PrivacyPolicy.pdf" 
                  className="hover:text-[#E6AF2E] transition"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/TermsAndConditions.pdf" 
                  className="hover:text-[#E6AF2E] transition"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-300 mb-4">Follow me for insights, updates, and more:</p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/divy-raj-johari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6AF2E] hover:underline inline-flex items-center gap-1 text-sm"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://instagram.com/divyjohari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6AF2E] hover:underline inline-flex items-center gap-1 text-sm"
              >
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Divy Raj Johari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
