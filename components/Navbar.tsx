'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <>
        {/* Top Bar */}
        <div className="bg-gray-900 text-white py-2 hidden md:block">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-6 text-sm">
                <a href="tel:+1234567890" className="flex items-center hover:text-yellow-400 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(123) 456-7890</span>
                </a>
                <a href="mailto:info@sdpolymers.com" className="flex items-center hover:text-yellow-400 transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@sdpolymers.com</span>
                </a>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <Link href="/careers" className="hover:text-yellow-400 transition-colors">Careers</Link>
                <span className="text-gray-600">|</span>
                <Link href="/news" className="hover:text-yellow-400 transition-colors">News</Link>
                <span className="text-gray-600">|</span>
                <Link href="/investor-relations" className="hover:text-yellow-400 transition-colors">Investor Relations</Link>
              </div>
            </div>
          </div>
        </div>
  
        {/* Main Header */}
        <header className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-15">
              {/* Logo */}
              <Link href="/" className="relative group">
                <div className="flex items-center">
                  <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    SD Polymers
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"
                    initial={false}
                    animate={{ width: isScrolled ? '100%' : '0%' }}
                  />
                </div>
              </Link>
  
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link 
                  href="/about" 
                  className="relative group py-2"
                >
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">About Us</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
                <Link 
                  href="/products" 
                  className="relative group py-2"
                >
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Products</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
                <Link 
                  href="/services" 
                  className="relative group py-2"
                >
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Services</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
                <Link 
                  href="/contact" 
                  className="relative group inline-flex items-center"
                >
                  <span className="bg-yellow-500 text-gray-900 px-6 py-2.5 rounded-full font-semibold 
                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                    active:scale-95">
                    Contact Us
                    <ChevronRight className="h-4 w-4 ml-1 inline-block" />
                  </span>
                </Link>
              </nav>
  
              {/* Mobile Menu Button */}
              <button
                className="md:hidden relative w-10 h-10 focus:outline-none group"
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
                  className="md:hidden py-4 border-t"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex flex-col space-y-4"
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
                          className="text-gray-700 hover:text-gray-900 transition-colors block"
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
                    >
                      <Link 
                        href="/contact"
                        className="bg-yellow-500 text-gray-900 px-6 py-2.5 rounded-full font-semibold inline-block
                          transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                          active:scale-95"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact Us
                        <ChevronRight className="h-4 w-4 ml-1 inline-block" />
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