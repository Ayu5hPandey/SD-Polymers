'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  className?: string;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  className,
}: HeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={cn("relative w-full h-[85vh] flex items-center overflow-hidden", className)}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: loaded ? 1 : 0, 
              y: loaded ? 0 : 20 
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ 
              opacity: loaded ? 1 : 0, 
              width: loaded ? '3rem' : 0 
            }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="h-1 bg-yellow-500 mb-6"
          />
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: loaded ? 1 : 0, 
              y: loaded ? 0 : 20 
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;