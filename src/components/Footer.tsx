
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gold p-2 rounded-full">
                <span className="text-primary-blue font-bold text-xl">पत</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Patpedhi</h3>
                <p className="text-xs opacity-80">सहकारी पतसंस्था</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Your trusted cooperative credit society since 1995. 
              आपले विश्वास, आमची जबाबदारी.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 hover:text-gold cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-gold cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/deposits" className="hover:text-gold transition-colors">Deposits</Link></li>
              <li><Link to="/loans" className="hover:text-gold transition-colors">Loans</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/apply-membership" className="hover:text-gold transition-colors">Become a Member</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-gold transition-colors">Digital Banking</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Mobile Banking</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Locker Facility</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Customer Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span>123 Main Street, City, State 400001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold" />
                <span>+91-12345-67890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold" />
                <span>info@patpedhi.co.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* RBI Logo and Compliance */}
        <div className="border-t border-blue-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="bg-white p-3 rounded-lg">
                <div className="text-primary-blue font-bold text-sm">RBI</div>
                <div className="text-primary-blue text-xs">REGULATED</div>
              </div>
              <div className="text-sm">
                <p className="font-semibold">Licensed by RBI</p>
                <p className="text-xs opacity-80">Registration No: CO-OP/2023/12345</p>
              </div>
            </div>
            
            <div className="text-center md:text-right text-sm opacity-80">
              <p>&copy; 2025 Patpedhi Cooperative Credit Society. All rights reserved.</p>
              <p className="font-marathi">सर्व हक्क राखीव</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
