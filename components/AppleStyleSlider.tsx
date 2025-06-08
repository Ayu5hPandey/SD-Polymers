'use client';

import React, { useState, useEffect } from 'react';
import { cn } from "@/components/lib/utils";
import { ChevronLeft, ChevronRight, Play, ArrowRight, Sparkles, Zap, Shield, Award, Globe, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced slider data with premium content
const slides = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    title: "ADVANCED POLYMERS",
    subtitle: "Next-Generation Materials",
    description: "Revolutionary polymer solutions engineered for superior performance, durability, and sustainability in demanding industrial applications.",
    button: "Explore Innovation",
    category: "Innovation",
    icon: <Zap className="h-5 w-5" />,
    features: ["High Performance", "Eco-Friendly", "Durable"],
    gradient: "from-blue-600 to-purple-600"
  },
  {
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80",
    title: "SUSTAINABLE MATERIALS",
    subtitle: "Green Technology",
    description: "Eco-conscious polymer compounds designed for a greener future without compromising on quality or performance standards.",
    button: "Discover Green Tech",
    category: "Sustainability",
    icon: <Globe className="h-5 w-5" />,
    features: ["Carbon Neutral", "Recyclable", "Bio-Based"],
    gradient: "from-green-600 to-emerald-600"
  },
  {
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80",
    title: "CUSTOM FORMULATIONS",
    subtitle: "Tailored Solutions",
    description: "Bespoke polymer solutions crafted to meet your specific industrial requirements with precision engineering and quality assurance.",
    button: "Get Custom Quote",
    category: "Custom Solutions",
    icon: <Star className="h-5 w-5" />,
    features: ["Made to Order", "Expert Design", "Quality Tested"],
    gradient: "from-orange-600 to-red-600"
  },
  {
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
    title: "QUALITY ASSURANCE",
    subtitle: "Certified Excellence",
    description: "Rigorous testing protocols and quality control measures ensuring consistent, reliable polymer products that exceed industry standards.",
    button: "View Certifications",
    category: "Quality",
    icon: <Shield className="h-5 w-5" />,
    features: ["ISO Certified", "Lab Tested", "Guaranteed"],
    gradient: "from-indigo-600 to-blue-600"
  },
  {
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=80",
    title: "TECHNICAL SUPPORT",
    subtitle: "Expert Guidance",
    description: "Comprehensive technical support and expert guidance throughout your polymer implementation journey with 24/7 assistance.",
    button: "Contact Experts",
    category: "Support",
    icon: <Award className="h-5 w-5" />,
    features: ["24/7 Support", "Expert Team", "Global Reach"],
    gradient: "from-purple-600 to-pink-600"
  }
];

export default function AppleStyleSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const slideCount = slides.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slideCount]);

  // Helper: get indices for prev, center, next
  function getVisibleIndices(centerIdx: number) {
    const prev = (centerIdx - 1 + slideCount) % slideCount;
    const next = (centerIdx + 1) % slideCount;
    return [prev, centerIdx, next];
  }
  const visibleIndices = getVisibleIndices(current);

  // Navigation functions
  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };
  
  const prev = () => {
    setDirection(-1);
    goTo((current - 1 + slideCount) % slideCount);
  };
  
  const next = () => {
    setDirection(1);
    goTo((current + 1) % slideCount);
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Enhanced Section Header */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg border border-yellow-200"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Our Premium Products & Services
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
              Innovative Polymer
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent relative">
              Solutions
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our comprehensive range of advanced polymer products and services, 
            engineered to meet the evolving demands of modern industry with unmatched precision and innovation.
          </motion.p>
          
          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 rounded-full shadow-lg"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium Controls */}
      <div className="absolute left-6 md:left-10 top-1/2 z-30 transform -translate-y-1/2">
        <motion.button
          className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 text-slate-800 hover:bg-white hover:scale-110 shadow-2xl border border-gray-200/50 transition-all duration-300 group"
          onClick={prev}
          aria-label="Previous slide"
          whileHover={{ scale: 1.1, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
        </motion.button>
      </div>
      
      <div className="absolute right-6 md:right-10 top-1/2 z-30 transform -translate-y-1/2">
        <motion.button
          className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 text-slate-800 hover:bg-white hover:scale-110 shadow-2xl border border-gray-200/50 transition-all duration-300 group"
          onClick={next}
          aria-label="Next slide"
          whileHover={{ scale: 1.1, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Enhanced Auto-play control */}
      <div className="absolute top-6 right-6 z-30">
        <motion.button
          className="bg-white/95 backdrop-blur-xl rounded-2xl p-3 text-slate-800 hover:bg-white shadow-2xl border border-gray-200/50 transition-all duration-300"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlaying ? (
            <div className="w-5 h-5 flex space-x-1 items-center justify-center">
              <div className="w-1.5 h-5 bg-slate-800 rounded-full"></div>
              <div className="w-1.5 h-5 bg-slate-800 rounded-full"></div>
            </div>
          ) : (
            <Play size={20} className="ml-0.5" />
          )}
        </motion.button>
      </div>

      {/* Premium Slider */}
      <div className="relative flex justify-center items-center w-full max-w-8xl mx-auto px-4">
        <div 
          className="relative w-full"
          style={{ height: 'clamp(400px, 30vw, 550px)' }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            {visibleIndices.map((slideIndex, position) => {
              const isCenter = position === 1;
              const isLeft = position === 0;
              const isRight = position === 2;
              
              let xOffset = '0%';
              let scale = 1;
              let zIndex = 10;
              let opacity = 0.3;
              let blur = 'blur(2px)';
              
              if (isCenter) {
                xOffset = '0%';
                scale = 1.15;
                zIndex = 30;
                opacity = 1;
                blur = 'blur(0px)';
              } else if (isLeft) {
                xOffset = '-90%';
                scale = 0.8;
                zIndex = 20;
                opacity = 0.5;
                blur = 'blur(1px)';
              } else if (isRight) {
                xOffset = '90%';
                scale = 0.8;
                zIndex = 20;
                opacity = 0.5;
                blur = 'blur(1px)';
              }

              return (
                <motion.div
                  key={`${slideIndex}-${position}`}
                  className="absolute top-0 left-1/2 cursor-pointer"
                  style={{
                    width: 'clamp(320px, 40vw, 600px)',
                    height: '100%',
                    borderRadius: '2rem',
                    overflow: 'hidden',
                    zIndex,
                    filter: blur,
                  }}
                  initial={{ 
                    x: '-50%',
                    scale: 0.7,
                    opacity: 0
                  }}
                  animate={{ 
                    x: `calc(-50% + ${xOffset})`,
                    scale,
                    opacity,
                    filter: blur
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  onClick={() => !isCenter && goTo(slideIndex)}
                  whileHover={!isCenter ? { scale: scale * 1.05 } : {}}
                >
                  <div className="relative w-full h-full group">
                    <img
                      src={slides[slideIndex].image}
                      className="w-full h-full object-cover"
                      alt={slides[slideIndex].title}
                      draggable={false}
                    />
                    
                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${slides[slideIndex].gradient}/20`} />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <motion.div 
                        className={`bg-gradient-to-r ${slides[slideIndex].gradient} text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm shadow-lg flex items-center space-x-2`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {slides[slideIndex].icon}
                        <span>{slides[slideIndex].category}</span>
                      </motion.div>
                    </div>
                    
                    {/* Features Pills */}
                    <div className="absolute top-6 right-6 flex flex-col space-y-2">
                      {slides[slideIndex].features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: isCenter ? 1 : 0.7, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <motion.div
                        className="mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isCenter ? 1 : 0.8, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <span className="text-sm font-semibold text-yellow-400 tracking-wider uppercase">
                          {slides[slideIndex].subtitle}
                        </span>
                      </motion.div>
                      
                      <motion.h3 
                        className="font-black text-2xl md:text-3xl mb-4 drop-shadow-lg leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isCenter ? 1 : 0.8, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {slides[slideIndex].title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-sm md:text-base mb-6 text-gray-200 drop-shadow leading-relaxed max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isCenter ? 1 : 0.7, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {slides[slideIndex].description}
                      </motion.p>
                      
                      <motion.button
                        className="bg-white/95 hover:bg-white text-slate-900 px-8 py-3 rounded-full font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 inline-flex items-center group border-2 border-white/20 hover:border-white/40"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isCenter ? 1 : 0.8, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {slides[slideIndex].button}
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Premium Progress Indicators */}
      <div className="flex justify-center items-center space-x-4 mt-12">
        {slides.map((slide, i) => (
          <motion.button
            key={i}
            className={cn(
              "relative overflow-hidden rounded-full transition-all duration-500 group",
              i === current 
                ? "w-16 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg" 
                : "w-4 h-4 bg-gray-300 hover:bg-gray-400 hover:scale-110"
            )}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            whileHover={{ scale: i === current ? 1.05 : 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {i === current && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600"></div>
                {isAutoPlaying && (
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-400"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                    key={current}
                  />
                )}
              </>
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              {slide.icon && i === current && (
                <motion.div
                  className="text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {React.cloneElement(slide.icon, { className: "h-3 w-3" })}
                </motion.div>
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Enhanced Slide Counter */}
      <div className="text-center mt-6">
        <motion.div
          className="inline-flex items-center bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-gray-200/50"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm font-bold text-slate-700">
            {current + 1}
          </span>
          <span className="text-gray-400 mx-2">of</span>
          <span className="text-sm font-bold text-slate-700">
            {slideCount}
          </span>
        </motion.div>
      </div>
    </div>
  );
}