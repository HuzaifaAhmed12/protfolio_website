import React, { useEffect, useRef, useState } from 'react';
import { Mail, MessageSquare, Send, Phone, MapPin, User, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { personalData } from '../data/personalData';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Map of icon names to components
  const iconComponents = {
    Github,
    Linkedin,
    Twitter,
    MessageCircle
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Have a question or want to work together?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-teal-600 bg-opacity-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail size={22} className="text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium mb-1">Email</h4>
                    <a 
                      href={`mailto:${personalData.email}`} 
                      className="text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-teal-600 bg-opacity-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone size={22} className="text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      +92-317-233-9596
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-teal-600 bg-opacity-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin size={22} className="text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium mb-1">Location</h4>
                    <p className="text-gray-600">{personalData.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-gray-800 font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {personalData.social.map((item) => {
                    const Icon = iconComponents[item.icon as keyof typeof iconComponents];
                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300"
                        aria-label={item.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">
                        <User size={18} />
                      </span>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600/50 focus:border-teal-600 text-gray-900"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">
                        <Mail size={18} />
                      </span>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600/50 focus:border-teal-600 text-gray-900"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">
                        <MessageSquare size={18} />
                      </span>
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600/50 focus:border-teal-600 text-gray-900"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="block w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600/50 focus:border-teal-600 text-gray-900"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 transition-colors duration-300"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;