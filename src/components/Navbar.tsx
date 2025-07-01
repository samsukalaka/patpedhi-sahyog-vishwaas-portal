
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-primary-blue text-white shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-gold p-2 rounded-full">
              <span className="text-primary-blue font-bold text-xl">पत</span>
            </div>
            <div>
              <h1 className="font-bold text-xl">Patpedhi</h1>
              <p className="text-xs opacity-80">सहकारी पतसंस्था</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`hover:text-gold transition-colors relative ${
                isActive('/') ? 'text-gold' : ''
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`hover:text-gold transition-colors ${
                isActive('/about') ? 'text-gold' : ''
              }`}
            >
              About Us
            </Link>

            {/* Deposits Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 hover:text-gold transition-colors"
                onClick={() => handleDropdownToggle('deposits')}
              >
                <span>Deposits</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-primary-blue shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/deposits" className="block px-4 py-2 hover:bg-blue-50 rounded-t-lg">Savings Account</Link>
                <Link to="/deposits" className="block px-4 py-2 hover:bg-blue-50">Fixed Deposit</Link>
                <Link to="/deposits" className="block px-4 py-2 hover:bg-blue-50 rounded-b-lg">Recurring Deposit</Link>
              </div>
            </div>

            {/* Loans Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 hover:text-gold transition-colors"
                onClick={() => handleDropdownToggle('loans')}
              >
                <span>Loans</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-primary-blue shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/loans" className="block px-4 py-2 hover:bg-blue-50 rounded-t-lg">Personal Loan</Link>
                <Link to="/loans" className="block px-4 py-2 hover:bg-blue-50">Gold Loan</Link>
                <Link to="/loans" className="block px-4 py-2 hover:bg-blue-50 rounded-b-lg">Vehicle Loan</Link>
              </div>
            </div>

            <Link 
              to="/services" 
              className={`hover:text-gold transition-colors ${
                isActive('/services') ? 'text-gold' : ''
              }`}
            >
              Services / डिजिटल बँकिंग
            </Link>

            <Link 
              to="/contact" 
              className={`hover:text-gold transition-colors ${
                isActive('/contact') ? 'text-gold' : ''
              }`}
            >
              Contact Us
            </Link>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-marathi">स्वागत आहे</span>
              <Button 
                variant="secondary" 
                className="bg-gold text-primary-blue hover:bg-gold/90 transition-all hover:scale-105"
              >
                Login / Apply
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-primary-blue border-t border-blue-600 animate-fade-in">
            <div className="px-4 py-2 space-y-2">
              <Link to="/" className="block py-2 hover:text-gold transition-colors">Home</Link>
              <Link to="/about" className="block py-2 hover:text-gold transition-colors">About Us</Link>
              <Link to="/deposits" className="block py-2 hover:text-gold transition-colors">Deposits</Link>
              <Link to="/loans" className="block py-2 hover:text-gold transition-colors">Loans</Link>
              <Link to="/services" className="block py-2 hover:text-gold transition-colors">Services</Link>
              <Link to="/contact" className="block py-2 hover:text-gold transition-colors">Contact Us</Link>
              <div className="pt-2">
                <Button 
                  variant="secondary" 
                  className="w-full bg-gold text-primary-blue hover:bg-gold/90"
                >
                  Login / Apply
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
