
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

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

            <Link 
              to="/deposits" 
              className={`hover:text-gold transition-colors ${
                isActive('/deposits') ? 'text-gold' : ''
              }`}
            >
              Deposits
            </Link>

            <Link 
              to="/loans" 
              className={`hover:text-gold transition-colors ${
                isActive('/loans') ? 'text-gold' : ''
              }`}
            >
              Loans
            </Link>

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

            {/* Show Dashboard link for members */}
            {user?.role === 'member' && (
              <Link 
                to="/member-dashboard" 
                className={`hover:text-gold transition-colors ${
                  isActive('/member-dashboard') ? 'text-gold' : ''
                }`}
              >
                <User className="inline h-4 w-4 mr-1" />
                Dashboard
              </Link>
            )}

            <div className="flex items-center space-x-2">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm">नमस्ते, {user.name}</span>
                  <Button 
                    onClick={logout}
                    className="bg-gold text-primary-blue hover:bg-gold/90 transition-all hover:scale-105 font-semibold"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <span className="text-sm font-marathi">स्वागत आहे</span>
                  <Link to="/login">
                    <Button 
                      className="bg-gold text-primary-blue hover:bg-gold/90 transition-all hover:scale-105 font-semibold"
                    >
                      Login / Apply
                    </Button>
                  </Link>
                </>
              )}
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
              
              {/* Show Dashboard link for members in mobile */}
              {user?.role === 'member' && (
                <Link to="/member-dashboard" className="block py-2 hover:text-gold transition-colors">
                  <User className="inline h-4 w-4 mr-1" />
                  Dashboard
                </Link>
              )}

              <div className="pt-2">
                {user ? (
                  <div className="space-y-2">
                    <p className="text-sm text-gold">नमस्ते, {user.name}</p>
                    <Button 
                      onClick={logout}
                      className="w-full bg-gold text-primary-blue hover:bg-gold/90"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Link to="/login">
                    <Button 
                      className="w-full bg-gold text-primary-blue hover:bg-gold/90"
                    >
                      Login / Apply
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
