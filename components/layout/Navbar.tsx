// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Menu, X, ChevronRight, Phone, Mail, ChevronDown, Globe, Award, Shield } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const productDropdownItems = [
//     { 
//       name: 'Advanced Polymers', 
//       href: '/products/pvc-granules',
//       description: 'High-performance P.V.C. Granules',
//       icon: <Award className="h-4 w-4" />
//     },
//     { 
//       name: 'Electrical Connectors', 
//       href: '/products/wire-harness-connectors',
//       description: 'Durable wire harness connectors',
//       icon: <Shield className="h-4 w-4" />
//     },
//     { 
//       name: 'P.V.C Sleeves', 
//       href: '/products/pvc-sleeves',
//       description: 'Engineered for specific applications',
//       icon: <Award className="h-4 w-4" />
//     },
//     { 
//       name: 'Custom Materials', 
//       href: '/app/contact-us',
//       description: 'Tailored polymer compounds',
//       icon: <Globe className="h-4 w-4" />
//     },
//   ];

//   return (
//     <>
//       {/* Enhanced Top Bar - THEMED */}
//       <div className="bg-background-dark text-text-light py-3 hidden md:block border-b border-border-color/30 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-10 text-sm">
//               <motion.a 
//                 href="tel:+1234567890" 
//                 className="flex items-center hover:text-secondary transition-all duration-300 group relative"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="bg-secondary/10 p-1.5 rounded-full mr-3 group-hover:bg-secondary/20 transition-colors">
//                   <Phone className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
//                 </div>
//                 <span className="font-medium">(123) 456-7890</span>
//                 <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></div>
//               </motion.a>
//               <motion.a 
//                 href="mailto:info@sdpolymers.com" 
//                 className="flex items-center hover:text-secondary transition-all duration-300 group relative"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="bg-secondary/10 p-1.5 rounded-full mr-3 group-hover:bg-secondary/20 transition-colors">
//                   <Mail className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
//                 </div>
//                 <span className="font-medium">info@sdpolymers.com</span>
//                 <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></div>
//               </motion.a>
//             </div>
//             <div className="flex items-center space-x-8 text-sm">
//               {['Careers', 'News', 'Investor Relations'].map((item, index) => (
//                 <motion.div key={item} whileHover={{ scale: 1.05 }}>
//                   <Link 
//                     href={`/${item.toLowerCase().replace(' ', '-')}`} 
//                     className="hover:text-secondary transition-all duration-300 relative group font-medium"
//                   >
//                     {item}
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
//                   </Link>
//                   {index < 2 && <span className="text-border-color/50 ml-8">|</span>}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Main Header - THEMED */}
//       <header className={`fixed w-full z-50 transition-all duration-700 ${
//         isScrolled 
//           ? 'bg-background-card/95 backdrop-blur-xl shadow-2xl border-b border-border-color/50' 
//           : 'bg-background-card/90 backdrop-blur-md'
//       }`}>
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             {/* Enhanced Logo - THEMED */}
//             <Link href="/" className="relative group">
//               <div className="flex items-center">
//                 <div className="relative">
//                   <motion.div
//                     className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     whileHover={{ scale: 1.05 }}
//                   />
//                   <div className="relative flex items-center space-x-3">
//                     <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center shadow-lg">
//                       <span className="text-text-light font-bold text-lg">SD</span>
//                     </div>
//                     <div>
//                       <span className={`text-3xl font-bold transition-all duration-300 bg-clip-text text-transparent ${
//                         isScrolled 
//                           ? 'bg-gradient-to-r from-text-light via-text-secondary to-text-light' 
//                           : 'bg-gradient-to-r from-text-light via-text-secondary to-text-light'
//                       }`}>
//                         SD Polymers
//                       </span>
//                       <div className="text-xs text-text-secondary font-medium tracking-wider">ADVANCED MATERIALS</div>
//                     </div>
//                   </div>
//                   <motion.div
//                     className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
//                     initial={{ width: 0 }}
//                     whileHover={{ width: '100%' }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//               </div>
//             </Link>

//             {/* Enhanced Desktop Navigation - THEMED */}
//             <nav className=" lg:flex items-center space-x-2">
//               <motion.div whileHover={{ scale: 1.02 }}>
//                 <Link 
//                   href="/about" 
//                   className="relative group px-5 py-3 rounded-xl transition-all duration-300 hover:bg-background-dark"
//                 >
//                   <span className="text-text-light group-hover:text-white font-semibold transition-colors">About Us</span>
//                   <span className="absolute bottom-2 left-5 right-5 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//                 </Link>
//               </motion.div>

//               {/* Enhanced Products Dropdown - THEMED */}
//               <div 
//                 className="relative group"
//                 onMouseEnter={() => setActiveDropdown('products')}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <motion.button 
//                   className="flex items-center px-5 py-3 rounded-xl transition-all duration-300 hover:bg-background-dark group"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <span className="text-text-light group-hover:text-white font-semibold transition-colors">Products</span>
//                   <ChevronDown className={`h-4 w-4 ml-2 transition-all duration-300 ${
//                     activeDropdown === 'products' ? 'rotate-180 text-primary' : 'text-text-secondary'
//                   }`} />
//                   <span className="absolute bottom-2 left-5 right-5 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//                 </motion.button>
                
//                 <AnimatePresence>
//                   {activeDropdown === 'products' && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 15, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 15, scale: 0.95 }}
//                       transition={{ duration: 0.2, ease: "easeOut" }}
//                       className="absolute top-full left-0 mt-3 w-80 bg-background-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border-color/50 py-3 z-50 overflow-hidden"
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
//                       <div className="relative z-10">
//                         {productDropdownItems.map((item, index) => (
//                           <motion.div
//                             key={item.name}
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: index * 0.05 }}
//                           >
//                             <Link
//                               href={item.href}
//                               className="block px-5 py-4 text-text-light hover:text-white hover:bg-background-dark transition-all duration-200 border-l-2 border-transparent hover:border-primary group"
//                             >
//                               <div className="flex items-start space-x-3">
//                                 <div className="bg-gradient-to-br from-primary to-primary-hover p-2 rounded-lg text-white group-hover:scale-110 transition-transform">
//                                   {item.icon}
//                                 </div>
//                                 <div>
//                                   <div className="font-semibold text-sm">{item.name}</div>
//                                   <div className="text-xs text-text-secondary mt-1">{item.description}</div>
//                                 </div>
//                               </div>
//                             </Link>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Contact Us Button - THEMED */}
//               <motion.div className="ml-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link 
//                   href="/contact" 
//                   className="relative group overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover rounded-full"></div>
//                   <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <span className="relative bg-gradient-to-r from-primary to-primary-hover text-text-light px-8 py-3 rounded-full font-bold 
//                     transform transition-all duration-300 hover:shadow-xl hover:shadow-primary/25
//                     active:scale-95 inline-flex items-center text-sm">
//                     Contact Us
//                     <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 </Link>
//               </motion.div>
//             </nav>

//             {/* Enhanced Mobile Menu Button - THEMED */}
//             <motion.button
//               className="lg:hidden relative w-12 h-12 focus:outline-none group bg-background-card rounded-xl border border-border-color/50"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 {/* ✅ Removed mode="wait" to fix warning */}
//                 <AnimatePresence> 
//                   {isMenuOpen ? (
//                     <motion.div
//                       key="close"
//                       initial={{ opacity: 0, rotate: -90 }}
//                       animate={{ opacity: 1, rotate: 0 }}
//                       exit={{ opacity: 0, rotate: 90 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <X className="h-6 w-6 text-text-light" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="menu"
//                       initial={{ opacity: 0, rotate: 90 }}
//                       animate={{ opacity: 1, rotate: 0 }}
//                       exit={{ opacity: 0, rotate: -90 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Menu className="h-6 w-6 text-text-light" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.button>
//           </div>

//           {/* Enhanced Mobile Navigation - THEMED */}
//           <AnimatePresence>
//             {isMenuOpen && (
//               <motion.nav 
//                 className="lg:hidden py-6 border-t border-border-color/50"
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.div 
//                   className="flex flex-col space-y-3"
//                   initial="closed"
//                   animate="open"
//                   variants={{
//                     open: {
//                       transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//                     },
//                     closed: {
//                       transition: { staggerChildren: 0.05, staggerDirection: -1 }
//                     }
//                   }}
//                 >
//                   {['About Us', 'Products'].map((item) => (
//                     <motion.div
//                       key={item}
//                       variants={{
//                         open: { x: 0, opacity: 1 },
//                         closed: { x: -20, opacity: 0 }
//                       }}
//                     >
//                       <Link 
//                         href={`/${item.toLowerCase().replace(' ', '-')}`}
//                         className="text-text-light hover:text-white hover:bg-background-dark transition-all duration-200 block px-5 py-4 rounded-xl font-semibold border-l-2 border-transparent hover:border-primary"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         {item}
//                       </Link>
//                     </motion.div>
//                   ))}
//                   <motion.div
//                     variants={{
//                       open: { x: 0, opacity: 1 },
//                       closed: { x: -20, opacity: 0 }
//                     }}
//                     className="pt-4"
//                   >
//                     <Link 
//                       href="/contact"
//                       className="bg-gradient-to-r from-primary to-primary-hover text-text-light px-8 py-3 rounded-full font-bold inline-flex items-center
//                         transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25
//                         active:scale-95"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Contact Us
//                       <ChevronRight className="h-4 w-4 ml-2" />
//                     </Link>
//                   </motion.div>
//                 </motion.div>
//               </motion.nav>
//             )}
//           </AnimatePresence>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown, Globe, Award, Shield } from 'lucide-react';
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const productDropdownItems = [
    { 
      name: 'Advanced Polymers', 
      href: '/products/pvc-granules',
      description: 'High-performance P.V.C. Granules',
      icon: <Award className="h-4 w-4" />
    },
    { 
      name: 'Electrical Connectors', 
      href: '/products/wire-harness-connectors',
      description: 'Durable wire harness connectors',
      icon: <Shield className="h-4 w-4" />
    },
    { 
      name: 'P.V.C Sleeves', 
      href: '/products/pvc-sleeves',
      description: 'Engineered for specific applications',
      icon: <Award className="h-4 w-4" />
    },
    { 
      name: 'Custom Materials', 
      href: '/contact',
      description: 'Tailored polymer compounds',
      icon: <Globe className="h-4 w-4" />
    },
  ];

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-background-dark text-text-light py-2 hidden md:block border-b border-border-color/30 relative overflow-hidden text-xs lg:text-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="tel:+919891758899" className="flex items-center hover:text-secondary transition-colors">
                <Phone className="h-3.5 w-3.5 mr-2 text-secondary" />
                <span className="font-medium">+91 98917 58899</span>
              </a>
              <a href="mailto:info@sdpolymers.com" className="flex items-center hover:text-secondary transition-colors">
                <Mail className="h-3.5 w-3.5 mr-2 text-secondary" />
                <span>info@sdpolymers.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-6">
              {['Careers', 'News', 'Investor Relations'].map((item, idx) => (
                <div key={item} className="flex items-center">
                   <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary transition-colors">
                    {item}
                  </Link>
                  {idx < 2 && <span className="text-border-color/50 ml-6">|</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background-dark/95 backdrop-blur-xl shadow-xl border-b border-border-color/30 py-2' 
            : 'bg-background-dark/50 backdrop-blur-md py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="relative z-[60] group" onClick={() => setIsMenuOpen(false)}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-text-light font-bold text-xl">SD</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-text-light block leading-none">SD Polymers</span>
                  <span className="text-[10px] text-secondary font-medium tracking-widest uppercase">Advanced Materials</span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-text-light font-medium hover:text-secondary transition-colors">
                About Us
              </Link>

              {/* Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-text-light font-medium hover:text-secondary transition-colors py-2">
                  Products
                  <ChevronDown className="h-4 w-4 ml-1 text-secondary" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      // ✅ Desktop Dropdown is BLACK
                      className="absolute top-full left-0 mt-2 w-72 bg-black border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        {productDropdownItems.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-900 transition-colors group/item"
                          >
                            <div className="mt-1 bg-primary/10 p-2 rounded-md text-secondary group-hover/item:bg-primary group-hover/item:text-text-light transition-colors">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-text-light">{item.name}</div>
                              <div className="text-xs text-text-secondary mt-0.5">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ✅ Desktop Contact Button - ORANGE */}
              <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40">
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden relative z-[60] p-2 text-text-light focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - FIXED POSITION */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              // ✅ FIXED: z-50 and fixed inset-0 to cover screen without shifting layout
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col pt-28 px-6 overflow-y-auto h-screen"
            >
              <div className="flex flex-col space-y-8">
                <Link 
                  href="/about" 
                  className="text-2xl font-semibold text-text-light border-b border-gray-800 pb-4" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                
                <div className="space-y-4">
                  <div className="text-2xl font-semibold text-secondary">Products</div>
                  
                  {/* ✅ MOBILE PRODUCT LIST - BLACK BACKGROUND */}
                  <div className="bg-black border border-gray-800 rounded-xl p-4 grid gap-4">
                    {productDropdownItems.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <div className="bg-gray-900 p-2 rounded-md text-secondary">
                          {item.icon}
                        </div>
                        <span className="text-text-light text-lg">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* ✅ Mobile Contact Button - ORANGE */}
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-orange-600 text-white text-center py-4 rounded-xl font-bold text-xl shadow-lg mt-auto mb-10 hover:bg-orange-700 active:scale-95 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;