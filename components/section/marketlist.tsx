// 'use client';
// import Image from 'next/image';
// import Link from 'next/link'; // ✅ Import Link
// import { FC, useState, useEffect } from 'react';
// import { markets } from '../../data/market'; // ✅ UPDATED Import Path

// const Markets: FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleClick = (index: number) => {
//     if (isMobile) {
//       setActiveIndex(activeIndex === index ? null : index);
//     }
//   };

//   return (
//     <div className="bg-black text-white min-h-screen p-6 md:p-10 font-sans">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-semibold mb-4">Our Markets</h1>
//         <p className="text-base md:text-lg mb-6 md:mb-8">
//           No matter how diverse your application or market, we can provide you with materials that meet your specifications.
//         </p>

//         <button className="border px-6 py-2 text-white border-yellow-400 hover:bg-yellow-500 transition mb-6 md:mb-8">
//           VIEW ALL
//         </button>

//         <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
//           {markets.map((market, idx) => {
//             const isActive = isMobile ? activeIndex === idx : false;

//             return (
//               <div
//                 key={idx}
//                 onClick={() => handleClick(idx)}
//                 className="relative group min-w-[220px] md:min-w-[250px] max-w-[250px] h-[340px] md:h-[350px] border border-white/20 rounded overflow-hidden hover:border-yellow-500 transition cursor-pointer"
//               >
//                 <Image
//                   src={market.image}
//                   alt={market.title}
//                   fill
//                   unoptimized
//                   className="object-cover opacity-80"
//                 />

//                 {/* Overlay Tile */}
//                 <div
//                   className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent transform transition-all duration-300
//                   ${isMobile
//                       ? isActive
//                         ? 'translate-y-0'
//                         : 'translate-y-16'
//                       : 'translate-y-16 group-hover:translate-y-0'
//                     }`}
//                 >
//                   <h2 className="text-xl font-bold">{market.title}</h2>
//                   <p
//                     className={`text-sm mt-1 transition-opacity duration-300
//                     ${isMobile
//                         ? isActive
//                           ? 'opacity-100'
//                           : 'opacity-0'
//                         : 'opacity-0 group-hover:opacity-100'
//                       }`}
//                   >
//                     {market.description}
//                   </p>
                  
//                   {/* ✅ Updated Link component */}
//                   <Link
//                     href={`/market/${market.slug}`} // Dynamic href
//                     className={`text-yellow-400 text-sm mt-2 inline-block transition-all duration-300
//                     ${isMobile
//                         ? isActive
//                           ? 'opacity-100'
//                           : 'opacity-0'
//                         : 'opacity-0 group-hover:opacity-100'
//                       }
//                       hover:text-yellow-300 hover:translate-x-1`}
//                   >
//                     LEARN MORE →
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Markets;
'use client';
import Image from 'next/image';
import Link from 'next/link'; 
import { FC, useState, useEffect } from 'react';
import { markets } from '@/data/market'; 
import { motion, AnimatePresence } from 'framer-motion'; 

const Markets: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // ✅ NEW: State for toggling "View All"
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  // ✅ NEW: Logic to show 4 items or All items
  const initialCount = 4;
  const visibleMarkets = showAll ? markets : markets.slice(0, initialCount);

  return (
    <div className="bg-background-dark text-text-light min-h-screen p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4">Our Markets</h1>
                <p className="text-base md:text-lg text-text-secondary mb-6 md:mb-0">
                No matter how diverse your application or market, we can provide you with materials that meet your specifications.
                </p>
            </div>
            
            {/* ✅ NEW: Functional View All Button */}
            <button 
                onClick={() => setShowAll(!showAll)}
                className="border px-6 py-2 text-primary border-primary hover:bg-primary hover:text-text-light transition font-medium rounded-md whitespace-nowrap"
            >
                {showAll ? 'VIEW LESS' : 'VIEW ALL'}
            </button>
        </div>

        {/* ✅ NEW: Grid Layout with Animation */}
        <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {visibleMarkets.map((market, idx) => {
                const isActive = isMobile ? activeIndex === idx : false;

                return (
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={market.slug}
                    onClick={() => handleClick(idx)}
                    className="relative group h-[350px] border border-background-card rounded-xl overflow-hidden hover:border-primary transition cursor-pointer shadow-lg"
                >
                    <Image
                    src={market.image}
                    alt={market.title}
                    fill
                    unoptimized
                    className="object-cover opacity-70" 
                    />

                    {/* Overlay Tile */}
                    <div
                    className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background-dark/80 via-background-dark/60 to-transparent transform transition-all duration-300
                    ${isMobile
                        ? isActive
                            ? 'translate-y-0'
                            : 'translate-y-16'
                        : 'translate-y-16 group-hover:translate-y-0'
                        }`}
                    >
                    <h2 className="text-xl font-bold">{market.title}</h2>
                    <p
                        className={`text-sm mt-1 transition-opacity duration-300
                        ${isMobile
                            ? isActive
                            ? 'opacity-100'
                            : 'opacity-0'
                            : 'opacity-0 group-hover:opacity-100'
                        }`}
                    >
                        {market.description}
                    </p>
                    
                    <Link
                        href={`/market/${market.slug}`}
                        className={`text-primary text-sm mt-2 inline-block transition-all duration-300
                        ${isMobile
                            ? isActive
                            ? 'opacity-100'
                            : 'opacity-0'
                            : 'opacity-0 group-hover:opacity-100'
                        }
                        hover:text-primary-hover hover:translate-x-1`}
                    >
                        LEARN MORE →
                    </Link>
                    </div>
                </motion.div>
                );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Markets;