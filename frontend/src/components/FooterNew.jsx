import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_bhm-sunrise/artifacts/s1dyghio_IMG_3934.jpeg"
              alt="BHM Sunrise"
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Building long-term value through real estate development, strategic investments, 
              and scalable business ventures.
            </p>
            <p className="text-sm text-gray-500">
              A part of BHM Group
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/company-overview" className="text-gray-400 hover:text-white transition-colors">Company Overview</Link></li>
              <li><Link to="/focus-areas" className="text-gray-400 hover:text-white transition-colors">Focus Areas</Link></li>
              <li><Link to="/ventures" className="text-gray-400 hover:text-white transition-colors">Our Ventures</Link></li>
              <li><Link to="/leadership" className="text-gray-400 hover:text-white transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <a href="mailto:contact@bhmsunrise.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@bhmsunrise.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="text-gray-400">
                  <div>+91 7355252601</div>
                  <div>+91 7398187786</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">
                  Fatehpur, Uttar Pradesh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} BHM Sunrise Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
