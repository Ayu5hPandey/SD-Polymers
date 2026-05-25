// 'use client';

// import React, { useState, useEffect } from 'react';
// import { cn } from "@/lib/utils";
// import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useRouter } from "next/navigation";


// // Enhanced slider data with more professional content
// const slides = [
//   {
//     slug: "pvc-granules",
//     image: "Granules.png",
//     title: "PVC GRANULES",
//     description: "High-quality ROHS/REACH-compliant PVC granules for durable plastic component manufacturing.",
//     button: "View Granule Options",
//     category: "Raw Materials"
//   },
//   {
//     slug: "cable-ties",
//     image: "Cable Tie.png",
//     title: "CABLE TIES",
//     description: "Strong and flexible fasteners for organizing and securing wiring bundles.",
//     button: "Browse Cable Ties",
//     category: "Cable Management"
//   },
//   {
//     slug: "silicone-braided-wire",
//     image: "elec.png",
//     title: "SILICONE BRAIDED WIRE",
//     description: "Heat-resistant fiberglass braided wires for appliances and industrial machinery.",
//     button: "Explore Wire Types",
//     category: "Wiring Solutions"
//   },
//   {
//     slug: "cat-5-cable",
//     image: "CAT5.png",
//     title: "CAT 5 CABLE",
//     description: "High-speed data transmission cable for telecom and networking applications.",
//     button: "See Networking Cables",
//     category: "Telecom & Networking"
//   },
//   {
//     slug: "pvc-electrical-tape",
//     image: "Tape.png",
//     title: "PVC ELECTRICAL TAPE",
//     description: "Flexible insulation tape for electrical wiring protection.",
//     button: "Shop Electrical Tape",
//     category: "Electrical Insulation"
//   },
//   {
//     slug: "terminal-pvc-sleeves",
//     image: "DipMoulding Cap.png",
//     title: "TERMINAL PVC SLEEVES",
//     description: "Durable dip-moulded sleeves and covers for electrical terminal insulation.",
//     button: "Discover Sleeves & Covers",
//     category: "Dip Moulded Components"
//   },
//   {
//     slug: "pvc-sleeves",
//     image: "PVC Sleeve.jpg",
//     title: "PVC SLEEVES",
//     description: "Protective sleeves for wire harnessing in electrical and industrial applications.",
//     button: "View Sleeve Sizes",
//     category: "Electrical Insulation"
//   },
//   {
//     slug: "wire-harness-connectors",
//     image: "wire harness connectors.png",
//     title: "WIRE HARNESS CONNECTORS",
//     description: "Reliable connectors, grommets, and accessories for automotive, appliance, and industrial wiring harnesses.",
//     button: "Explore Connector Range",
//     category: "Connectivity Solutions"
//   }
// ];


// export default function AppleStyleSlider() {
//   const router = useRouter();

//   const [current, setCurrent] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const slideCount = slides.length;

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slideCount);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, slideCount]);

//   // Helper: get indices for prev, center, next
//   function getVisibleIndices(centerIdx: number) {
//     const prev = (centerIdx - 1 + slideCount) % slideCount;
//     const next = (centerIdx + 1) % slideCount;
//     return [prev, centerIdx, next];
//   }
//   const visibleIndices = getVisibleIndices(current);

//   // Navigation functions
//   const goTo = (idx: number) => {
//     setCurrent(idx);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
//   };
//   const prev = () => goTo((current - 1 + slideCount) % slideCount);
//   const next = () => goTo((current + 1) % slideCount);

//   return (
//     <div className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden">
//       {/* Section Header */}
//       <div className="container mx-auto px-4 mb-12">
//         <motion.div 
//           className="text-center max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
//             Our Products & Services
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
//             Innovative Polymer
//             <span className="block text-yellow-600">Solutions</span>
//           </h2>
//           <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
//             Discover our comprehensive range of advanced polymer products and services, 
//             engineered to meet the evolving demands of modern industry.
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-8 rounded-full"></div>
//         </motion.div>
//       </div>

//       {/* Enhanced Controls */}
//       <div className="absolute left-4 md:left-8 top-1/2 z-20 transform -translate-y-1/2">
//         <motion.button
//           className="bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:bg-white hover:scale-110 shadow-lg border border-gray-200 transition-all duration-300"
//           onClick={prev}
//           aria-label="Previous slide"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <ChevronLeft size={24} />
//         </motion.button>
//       </div>
      
//       <div className="absolute right-4 md:right-8 top-1/2 z-20 transform -translate-y-1/2">
//       <motion.button
//   className="bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:bg-white hover:scale-110 shadow-lg border border-gray-200 transition-all duration-300"
//   onClick={next}
//   aria-label="Next slide"
//   whileHover={{ scale: 1.1 }}
//   whileTap={{ scale: 0.95 }}
// >
//   <ChevronRight size={24} />
// </motion.button>

//       </div>

//       {/* Auto-play control */}
//       <div className="absolute top-4 right-4 z-20">
//         <motion.button
//           className="bg-white/90 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white shadow-lg border border-gray-200 transition-all duration-300"
//           onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//           aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {isAutoPlaying ? (
//             <div className="w-4 h-4 flex space-x-1">
//               <div className="w-1 h-4 bg-gray-800 rounded"></div>
//               <div className="w-1 h-4 bg-gray-800 rounded"></div>
//             </div>
//           ) : (
//             <Play size={16} className="ml-0.5" />
//           )}
//         </motion.button>
//       </div>

//       {/* Enhanced Slider */}
//       <div className="relative flex justify-center items-center w-full max-w-7xl mx-auto px-4">
//         <div 
//           className="relative w-full"
//           style={{ height: 'clamp(300px, 25vw, 450px)' }}
//         >
//           <AnimatePresence mode="wait">
//             {visibleIndices.map((slideIndex, position) => {
//               const isCenter = position === 1;
//               const isLeft = position === 0;
//               const isRight = position === 2;
              
//               let xOffset = '0%';
//               let scale = 1;
//               let zIndex = 10;
//               let opacity = 0.4;
              
//               if (isCenter) {
//                 xOffset = '0%';
//                 scale = 1.1;
//                 zIndex = 30;
//                 opacity = 1;
//               } else if (isLeft) {
//                 xOffset = '-85%';
//                 scale = 0.85;
//                 zIndex = 20;
//                 opacity = 0.6;
//               } else if (isRight) {
//                 xOffset = '85%';
//                 scale = 0.85;
//                 zIndex = 20;
//                 opacity = 0.6;
//               }

//               return (
//                 <motion.div
//                   key={`${slideIndex}-${position}`}
//                   className="absolute top-0 left-1/2 cursor-pointer"
//                   style={{
//                     width: 'clamp(280px, 35vw, 500px)',
//                     height: '100%',
//                     borderRadius: '1.5rem',
//                     overflow: 'hidden',
//                     zIndex,
//                   }}
//                   initial={{ 
//                     x: '-50%',
//                     scale: 0.8,
//                     opacity: 0
//                   }}
//                   animate={{ 
//                     x: `calc(-50% + ${xOffset})`,
//                     scale,
//                     opacity
//                   }}
//                   transition={{ 
//                     duration: 0.6,
//                     ease: [0.25, 0.46, 0.45, 0.94]
//                   }}
//                   onClick={() => !isCenter && goTo(slideIndex)}
//                   whileHover={!isCenter ? { scale: scale * 1.05 } : {}}
//                 >
//                   <div className="relative w-full h-full group">
//                     <img
//                       src={slides[slideIndex].image}
//                       className="w-full h-full object-cover"
//                       alt={slides[slideIndex].title}
//                       draggable={false}
//                     />
                    
//                     {/* Enhanced Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
//                     {/* Category Badge */}
//                     <div className="absolute top-4 left-4">
//                       <span className="bg-yellow-500/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
//                         {slides[slideIndex].category}
//                       </span>
//                     </div>
                    
//                     {/* Content */}
//                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                       <motion.h3 
//                         className="font-bold text-xl md:text-2xl mb-2 drop-shadow-lg"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: isCenter ? 1 : 0.8, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                       >
//                         {slides[slideIndex].title}
//                       </motion.h3>
                      
//                       <motion.p 
//                         className="text-sm md:text-base mb-4 text-gray-200 drop-shadow leading-relaxed"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: isCenter ? 1 : 0.7, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                       >
//                         {slides[slideIndex].description}
//                       </motion.p>
                      
//                       <motion.button
//   className="bg-white/95 hover:bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group"
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: isCenter ? 1 : 0.8, y: 0 }}
//   transition={{ delay: 0.4 }}
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   onClick={() => router.push(`/products/${slides[slideIndex].slug}`)} // ✅ This works inside the map
// >
//   {slides[slideIndex].button}
//   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
// </motion.button>

//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Enhanced Progress Indicators */}
//       <div className="flex justify-center items-center space-x-3 mt-8">
//         {slides.map((_, i) => (
//           <motion.button
//             key={i}
//             className={cn(
//               "relative overflow-hidden rounded-full transition-all duration-300",
//               i === current 
//                 ? "w-12 h-3 bg-yellow-500" 
//                 : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
//             )}
//             onClick={() => goTo(i)}
//             aria-label={`Go to slide ${i + 1}`}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {i === current && isAutoPlaying && (
//               <motion.div
//                 className="absolute top-0 left-0 h-full bg-yellow-600"
//                 initial={{ width: '0%' }}
//                 animate={{ width: '100%' }}
//                 transition={{ duration: 5, ease: 'linear' }}
//                 key={current} // Reset animation when slide changes
//               />
//             )}
//           </motion.button>
//         ))}
//       </div>

//       {/* Slide Counter */}
//       <div className="text-center mt-4">
//         <span className="text-sm text-gray-500 font-medium">
//           {current + 1} / {slideCount}
//         </span>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils"; 
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from "next/navigation";

const slides = [
  {
    slug: "pvc-granules",
    image: "Granules.png",
    title: "PVC GRANULES",
    description: "High-quality ROHS/REACH-compliant PVC granules for durable plastic component manufacturing.",
    button: "View Granule Options",
    category: "Raw Materials"
  },
  {
    slug: "cable-ties",
    image: "Cable Tie.png",
    title: "CABLE TIES",
    description: "Strong and flexible fasteners for organizing and securing wiring bundles.",
    button: "Browse Cable Ties",
    category: "Cable Management"
  },
  {
    slug: "silicone-braided-wire",
    image: "silicon-fibre.png",
    title: "SILICONE WIRE",
    description: "Heat-resistant fiberglass braided wires for appliances and industrial machinery.",
    button: "Explore Wire Types",
    category: "Wiring Solutions"
  },
  {
    slug: "cat-5-cable",
    image: "cat-5.png",
    title: "CAT 5 CABLE",
    description: "High-speed data transmission cable for telecom and networking applications.",
    button: "See Networking Cables",
    category: "Telecom"
  },
  {
    slug: "pvc-electrical-tape",
    image: "Tape.png",
    title: "PVC TAPE",
    description: "Flexible insulation tape for electrical wiring protection.",
    button: "Shop Electrical Tape",
    category: "Insulation"
  },
  {
    slug: "terminal-pvc-sleeves",
    image: "DipMoulding Cap.png",
    title: "TERMINAL SLEEVES",
    description: "Durable dip-moulded sleeves and covers for electrical terminal insulation.",
    button: "Discover Sleeves",
    category: "Dip Moulding"
  },
  {
    slug: "pvc-sleeves",
    image: "PVC Sleeve.jpg",
    title: "PVC SLEEVES",
    description: "Protective sleeves for wire harnessing in electrical and industrial applications.",
    button: "View Sleeve Sizes",
    category: "Insulation"
  },
];

export default function AppleStyleSlider() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const slideCount = slides.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slideCount]);

  // Get Prev, Current, Next indices
  function getVisibleIndices(centerIdx: number) {
    const prev = (centerIdx - 1 + slideCount) % slideCount;
    const next = (centerIdx + 1) % slideCount;
    return [prev, centerIdx, next];
  }
  const visibleIndices = getVisibleIndices(current);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  const prev = () => goTo((current - 1 + slideCount) % slideCount);
  const next = () => goTo((current + 1) % slideCount);

  return (
    <div className="relative w-full bg-background-dark py-16 overflow-hidden">
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <div className="inline-flex items-center bg-secondary/20 text-secondary px-4 py-2 rounded-full text-xs font-semibold mb-4 border border-secondary/30">
          <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
          Our Products & Services
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-4">
          Innovative Polymer <span className="text-secondary">Solutions</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Advanced materials engineered for modern industry performance.
        </p>
      </div>

      {/* Controls - Centered Vertically */}
      <div className="absolute left-4 md:left-10 top-1/2 z-40 -translate-y-1/2">
        <button 
          onClick={prev}
          className="bg-background-card/80 backdrop-blur-md p-3 rounded-full text-text-light hover:bg-primary hover:scale-110 transition-all border border-border-color/50 shadow-xl"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      
      <div className="absolute right-4 md:right-10 top-1/2 z-40 -translate-y-1/2">
        <button 
          onClick={next}
          className="bg-background-card/80 backdrop-blur-md p-3 rounded-full text-text-light hover:bg-primary hover:scale-110 transition-all border border-border-color/50 shadow-xl"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 3D Slider Container */}
      <div className="relative flex justify-center items-center w-full h-[450px] md:h-[500px]">
        <AnimatePresence mode="popLayout">
          {visibleIndices.map((slideIndex, position) => {
            // On Mobile, only show center slide
            if (isMobile && position !== 1) return null;

            const isCenter = position === 1;
            const isLeft = position === 0;
            const isRight = position === 2;
            
            // 3D Positioning Logic
            let xOffset = '0%';
            let scale = 1;
            let zIndex = 10;
            let opacity = 0.5;
            let rotateY = 0;
            
            if (isCenter) {
              xOffset = '0%';
              scale = 1.1; // Pop out
              zIndex = 30;
              opacity = 1;
              rotateY = 0;
            } else if (isLeft) {
              xOffset = '-75%'; // Move Left
              scale = 0.85; // Shrink
              zIndex = 20;
              opacity = 0.6;
              rotateY = 15; // Slight tilt
            } else if (isRight) {
              xOffset = '75%'; // Move Right
              scale = 0.85; // Shrink
              zIndex = 20;
              opacity = 0.6;
              rotateY = -15; // Slight tilt
            }

            return (
              <motion.div
                key={`${slideIndex}-${position}`}
                className={cn(
                  "absolute top-0 left-1/2 cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-2xl",
                  isCenter ? "shadow-primary/20 ring-2 ring-primary/50" : "grayscale-[0.5]"
                )}
                style={{
                  width: 'clamp(280px, 30vw, 450px)',
                  height: '100%',
                  zIndex,
                  perspective: '1000px',
                }}
                initial={{ x: '-50%', scale: 0.8, opacity: 0 }}
                animate={{ 
                  x: `calc(-50% + ${xOffset})`, 
                  scale, 
                  opacity,
                  rotateY
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => !isCenter && goTo(slideIndex)}
              >
                <div className="relative w-full h-full group">
                  <img
                    src={slides[slideIndex].image}
                    className="w-full h-full object-cover"
                    alt={slides[slideIndex].title}
                  />
                  
                  {/* ✅ Light Overlay for Black Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent" />
                  
                  {/* Content - Black Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-gray-900 text-center">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full mb-2 uppercase tracking-wider">
                      {slides[slideIndex].category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 leading-tight">
                      {slides[slideIndex].title}
                    </h3>
                    
                    {/* Only show button & desc on center slide for cleaner look */}
                    <motion.div
                      animate={{ opacity: isCenter ? 1 : 0, height: isCenter ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4 font-medium">
                        {slides[slideIndex].description}
                      </p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/products/${slides[slideIndex].slug}`);
                        }}
                        className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-lg"
                      >
                        {slides[slideIndex].button}
                        <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2 mt-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === current ? "w-8 bg-secondary" : "w-2 bg-gray-600/50 hover:bg-gray-500"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}