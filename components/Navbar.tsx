'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productDropdownItems = [
    { name: 'Polymer Solutions', href: '/products/polymer-solutions' },
    { name: 'Industrial Plastics', href: '/products/industrial-plastics' },
    { name: 'Custom Materials', href: '/products/custom-materials' },
    { name: 'Specialty Compounds', href: '/products/specialty-compounds' },
  ];

  const servicesDropdownItems = [
    { name: 'Material Testing', href: '/services/material-testing' },
    { name: 'Custom Formulation', href: '/services/custom-formulation' },
    { name: 'Technical Support', href: '/services/technical-support' },
    { name: 'Quality Assurance', href: '/services/quality-assurance' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2.5 hidden md:block border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8 text-sm">
              <a href="tel:+1234567890" className="flex items-center hover:text-yellow-400 transition-all duration-300 group">
                <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@sdpolymers.com" className="flex items-center hover:text-yellow-400 transition-all duration-300 group">
                <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>info@sdpolymers.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/careers" className="hover:text-yellow-400 transition-colors relative group">
                Careers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/news" className="hover:text-yellow-400 transition-colors relative group">
                News
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/investor-relations" className="hover:text-yellow-400 transition-colors relative group">
                Investor Relations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="relative group">
              <div className="flex items-center">
                <div className="relative">
                  <span className={`text-3xl font-bold transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent' 
                      : 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent'
                  }`}>
                    SD Polymers
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link 
                href="/about" 
                className="relative group px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-50"
              >
                <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors">About Us</span>
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>

              {/* Products Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-50 group">
                  <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors">Products</span>
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                    activeDropdown === 'products' ? 'rotate-180' : ''
                  }`} />
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {productDropdownItems.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-yellow-50 transition-all duration-200 border-l-2 border-transparent hover:border-yellow-400"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-50 group">
                  <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors">Services</span>
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {servicesDropdownItems.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-yellow-50 transition-all duration-200 border-l-2 border-transparent hover:border-yellow-400"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="/contact" 
                className="relative group ml-4"
              >
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-2.5 rounded-full font-semibold 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-yellow-400 hover:to-yellow-500
                  active:scale-95 inline-flex items-center">
                  Contact Us
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 focus:outline-none group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav 
                className="lg:hidden py-4 border-t border-gray-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex flex-col space-y-2"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {['About Us', 'Products', 'Services'].map((item) => (
                    <motion.div
                      key={item}
                      variants={{
                        open: { x: 0, opacity: 1 },
                        closed: { x: -20, opacity: 0 }
                      }}
                    >
                      <Link 
                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 block px-4 py-3 rounded-lg font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: -20, opacity: 0 }
                    }}
                    className="pt-2"
                  >
                    <Link 
                      href="/contact"
                      className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-2.5 rounded-full font-semibold inline-flex items-center
                        transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                        active:scale-95"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Navbar;