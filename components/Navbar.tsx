'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, Phone, Mail, ChevronDown, Globe, Award, Shield } from 'lucide-react';
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
    { 
      name: 'Advanced Polymers', 
      href: '/products/advanced-polymers',
      description: 'High-performance polymer solutions',
      icon: <Award className="h-4 w-4" />
    },
    { 
      name: 'Industrial Plastics', 
      href: '/products/industrial-plastics',
      description: 'Durable materials for industry',
      icon: <Shield className="h-4 w-4" />
    },
    { 
      name: 'Custom Materials', 
      href: '/products/custom-materials',
      description: 'Tailored polymer compounds',
      icon: <Globe className="h-4 w-4" />
    },
    { 
      name: 'Specialty Compounds', 
      href: '/products/specialty-compounds',
      description: 'Engineered for specific applications',
      icon: <Award className="h-4 w-4" />
    },
  ];

  const servicesDropdownItems = [
    { 
      name: 'Material Testing', 
      href: '/services/material-testing',
      description: 'Comprehensive quality analysis',
      icon: <Shield className="h-4 w-4" />
    },
    { 
      name: 'Custom Formulation', 
      href: '/services/custom-formulation',
      description: 'Bespoke polymer development',
      icon: <Globe className="h-4 w-4" />
    },
    { 
      name: 'Technical Support', 
      href: '/services/technical-support',
      description: '24/7 expert assistance',
      icon: <Award className="h-4 w-4" />
    },
    { 
      name: 'Quality Assurance', 
      href: '/services/quality-assurance',
      description: 'Rigorous testing protocols',
      icon: <Shield className="h-4 w-4" />
    },
  ];

  return (
    <>
      {/* Enhanced Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-3 hidden md:block border-b border-blue-800/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-10 text-sm">
              <motion.a 
                href="tel:+1234567890" 
                className="flex items-center hover:text-yellow-400 transition-all duration-300 group relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-yellow-500/10 p-1.5 rounded-full mr-3 group-hover:bg-yellow-500/20 transition-colors">
                  <Phone className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium">(123) 456-7890</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
              </motion.a>
              <motion.a 
                href="mailto:info@sdpolymers.com" 
                className="flex items-center hover:text-yellow-400 transition-all duration-300 group relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-yellow-500/10 p-1.5 rounded-full mr-3 group-hover:bg-yellow-500/20 transition-colors">
                  <Mail className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium">info@sdpolymers.com</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
              </motion.a>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              {['Careers', 'News', 'Investor Relations'].map((item, index) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-yellow-400 transition-all duration-300 relative group font-medium"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  {index < 2 && <span className="text-blue-400/50 ml-8">|</span>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="relative group">
              <div className="flex items-center">
                <div className="relative">
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="relative flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">SD</span>
                    </div>
                    <div>
                      <span className={`text-3xl font-bold transition-all duration-300 ${
                        isScrolled 
                          ? 'bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent' 
                          : 'bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent'
                      }`}>
                        SD Polymers
                      </span>
                      <div className="text-xs text-gray-500 font-medium tracking-wider">ADVANCED MATERIALS</div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link 
                  href="/about" 
                  className="relative group px-5 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50"
                >
                  <span className="text-gray-700 group-hover:text-slate-900 font-semibold transition-colors">About Us</span>
                  <span className="absolute bottom-2 left-5 right-5 h-0.5 bg-gradient-to-r from-yellow-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </motion.div>

              {/* Enhanced Products Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button 
                  className="flex items-center px-5 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-gray-700 group-hover:text-slate-900 font-semibold transition-colors">Products</span>
                  <ChevronDown className={`h-4 w-4 ml-2 transition-all duration-300 ${
                    activeDropdown === 'products' ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`} />
                  <span className="absolute bottom-2 left-5 right-5 h-0.5 bg-gradient-to-r from-yellow-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </motion.button>
                
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 py-3 z-50 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-yellow-50/50"></div>
                      <div className="relative z-10">
                        {productDropdownItems.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="block px-5 py-4 text-gray-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-blue-50 transition-all duration-200 border-l-2 border-transparent hover:border-yellow-400 group"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-2 rounded-lg text-white group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </div>
                                <div>
                                  <div className="font-semibold text-sm">{item.name}</div>
                                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Enhanced Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button 
                  className="flex items-center px-5 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-gray-700 group-hover:text-slate-900 font-semibold transition-colors">Services</span>
                  <ChevronDown className={`h-4 w-4 ml-2 transition-all duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`} />
                  <span className="absolute bottom-2 left-5 right-5 h-0.5 bg-gradient-to-r from-yellow-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </motion.button>
                
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 py-3 z-50 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-yellow-50/50"></div>
                      <div className="relative z-10">
                        {servicesDropdownItems.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="block px-5 py-4 text-gray-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-blue-50 transition-all duration-200 border-l-2 border-transparent hover:border-blue-400 group"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg text-white group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </div>
                                <div>
                                  <div className="font-semibold text-sm">{item.name}</div>
                                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div className="ml-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-8 py-3 rounded-full font-bold 
                    transform transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25
                    active:scale-95 inline-flex items-center text-sm">
                    Contact Us
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative w-12 h-12 focus:outline-none group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
                      <X className="h-6 w-6 text-gray-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6 text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          </div>

          {/* Enhanced Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav 
                className="lg:hidden py-6 border-t border-gray-200/50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex flex-col space-y-3"
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
                        className="text-gray-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200 block px-5 py-4 rounded-xl font-semibold border-l-2 border-transparent hover:border-yellow-400"
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
                    className="pt-4"
                  >
                    <Link 
                      href="/contact"
                      className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-8 py-3 rounded-full font-bold inline-flex items-center
                        transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25
                        active:scale-95"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                      <ChevronRight className="h-4 w-4 ml-2" />
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