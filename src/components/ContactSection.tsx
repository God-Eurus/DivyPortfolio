import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xdkgoqaq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: result?.errors?.[0]?.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please check your internet connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together? Fill out the form below with your message, and I’ll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-[#0A2342] text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <InfoItem icon={<Phone size={24} className="text-[#E6AF2E]" />} title="Phone" value="+1 (647) 679-7468" />
              <InfoItem icon={<Mail size={24} className="text-[#E6AF2E]" />} title="Email" value="divyrajjohari@gmail.com" />
              <InfoItem icon={<MapPin size={24} className="text-[#E6AF2E]" />} title="Location" value="Ontario, Canada" />
            </div>

            {/* Socials */}
            <div className="mt-10">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <SocialIcon
                  href="https://linkedin.com/in/divy-raj-johari"
                  label="LinkedIn"
                  icon={<Linkedin size={24} />}
                />
                <SocialIcon
                  href="https://instagram.com/YOUR_HANDLE"
                  label="Instagram"
                  icon={<Instagram size={24} />}
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
              <input type="hidden" name="_captcha" value="false" />

              {formStatus && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <FormField label="Your Name" name="name" value={formData.name} onChange={handleChange} />
                <FormField label="Your Email" name="email" value={formData.email} onChange={handleChange} type="email" />
              </div>

              <div className="mb-6">
                <FormField label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E6AF2E] focus:outline-none"
                  placeholder="Let me know how I can assist you..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#0A2342] hover:bg-[#0D3056] text-white font-semibold py-3 px-8 rounded-md transition-all transform hover:scale-105 shadow-lg flex items-center ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Form Field
const FormField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E6AF2E] focus:outline-none"
      placeholder={`Enter your ${name}`}
    />
  </div>
);

// Reusable Info Item
const InfoItem = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="flex items-start">
    <div className="bg-[#0D3056] p-3 rounded-lg mr-4">{icon}</div>
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-gray-300">{value}</p>
    </div>
  </div>
);

// Social Icon Component
const SocialIcon = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#0D3056] p-3 rounded-lg hover:bg-[#E6AF2E] transition-colors text-white"
    aria-label={label}
  >
    {icon}
  </a>
);

export default ContactSection;
