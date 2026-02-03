// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { cn } from '@/lib/utils'; // Make sure this path is correct, e.g., '@/lib/utils'

// interface HeroProps {
//   title: string;
//   subtitle: string;
//   backgroundImage: string;
//   className?: string;
// }

// const Hero = ({
//   title,
//   subtitle,
//   backgroundImage,
//   className,
// }: HeroProps) => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   return (
//     <div className={cn("relative w-full h-[85vh] flex items-center overflow-hidden", className)}>
//       {/* Background Image with Overlay - THEMED */}
//       <div className="absolute inset-0 w-full h-full">
//         <Image
//           src={backgroundImage}
//           alt="Hero background"
//           fill
//           priority
//           className="object-cover object-center"
//           sizes="100vw"
//           quality={90}
//         />
//         {/* ✅ THEMED: Overlay changed from black to theme's dark blue */}
//         <div className="absolute inset-0 bg-gradient-to-r from-background-dark/70 via-background-card/60 to-background-dark/50"></div>
//       </div>

//       {/* Content Container */}
//       <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
//         <div className="max-w-3xl">
//           <motion.h1 
//             // ✅ THEMED: Text color updated
//             className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-light leading-tight mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ 
//               opacity: loaded ? 1 : 0, 
//               y: loaded ? 0 : 20 
//             }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             {title}
//           </motion.h1>
          
//           <motion.div
//             initial={{ opacity: 0, width: 0 }}
//             animate={{ 
//               opacity: loaded ? 1 : 0, 
//               width: loaded ? '3rem' : 0 
//             }}
//             transition={{ duration: 0.4, delay: 0.6 }}
//             // ✅ THEMED: Accent line changed from yellow to secondary (teal green)
//             className="h-1 bg-secondary mb-6"
//           />
          
//           <motion.p 
//             // ✅ THEMED: Text color updated
//             className="text-lg md:text-xl text-text-secondary max-w-2xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ 
//               opacity: loaded ? 1 : 0, 
//               y: loaded ? 0 : 20 
//             }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//           >
//             {subtitle}
//           </motion.p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
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
    // ✅ FIXED: Reduced height on mobile (h-[70vh]) to prevent extreme zooming.
    // Desktop remains tall (md:h-[90vh]).
    <div className={cn("relative w-full h-[70vh] md:h-[90vh] flex items-center overflow-hidden", className)}>
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="relative w-full h-full"
          // ✅ ADDED: Subtle "Zoom Out" animation (scales from 1.1 to 1.0)
          initial={{ scale: 1.15 }} 
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            priority
            // ✅ FIXED: 'object-center' helps keep the focus in the middle
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
          />
        </motion.div>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/70 to-background-dark/30"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-10 md:pt-0">
        <div className="max-w-4xl">
          
          {/* Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-light leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          {/* The Line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: loaded ? 1 : 0, width: loaded ? '6rem' : 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="h-1.5 bg-secondary mb-6 rounded-full"
          />
          
          {/* "SD Polymers" Branding Text */}
          <motion.h2
            className="text-xl md:text-3xl font-bold text-text-light mb-4 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
          connect with us
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
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