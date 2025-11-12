// // components/our market/market/[slug].tsx
// // ✅ THIS IS YOUR EXISTING COMPONENT FILE
// 'use client';

// // Make sure you are using 'next/navigation', NOT 'next/router'
// import { useParams } from 'next/navigation'; 
// import Image from 'next/image';
// import Link from 'next/link';
// import { markets } from '../../data/market'; // Check this import path
// import { ArrowLeft, CheckCircle } from 'lucide-react';
// import { FC } from 'react';

// const MarketDetailPage: FC = () => {
//   const params = useParams(); 
//   const slug = params.slug; 

//   const market = markets.find(m => m.slug === slug);

//   if (!market) {
//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">
//         <p>Market data not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-b from-black via-slate-900 to-black text-white min-h-screen font-sans">
      
//       {/* Header with Background Image */}
//       <div className="relative h-[40vh] md:h-[50vh] w-full">
//         <Image
//           src={market.image}
//           alt={market.title}
//           fill
//           unoptimized
//           className="object-cover opacity-30"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-7xl mx-auto w-full">
//           <Link 
//             href="/markets" // This should be the URL for your main markets list page
//             className="flex items-center text-yellow-400 hover:text-yellow-300 transition group mb-4 text-sm"
//           >
//             <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
//             Back to All Markets
//           </Link>
//           <h1 className="text-4xl md:text-6xl font-bold text-white shadow-lg">
//             {market.title}
//           </h1>
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="max-w-7xl mx-auto p-8 md:p-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
//               Sector Overview
//             </h2>
//             <p className="text-lg text-gray-300 leading-relaxed">
//               {market.detailedInfo.overview}
//             </p>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-slate-800/50 border border-blue-800/30 rounded-lg p-6 sticky top-28">
//               <h3 className="text-2xl font-semibold mb-5 text-white">
//                 Key Applications
//               </h3>
//               <ul className="space-y-3">
//                 {market.detailedInfo.applications.map((app) => (
//                   <li key={app} className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
//                     <span className="text-gray-300">{app}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
          
//           {/* Full-width Products Section */}
//           <div className="lg:col-span-3 mt-8">
//             <h3 className="text-3xl font-semibold mb-5 text-yellow-400">
//               Relevant Products
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {market.detailedInfo.relevantProducts.map((prod) => (
//                 <div 
//                   key={prod} 
//                   className="bg-slate-800/50 border border-white/10 rounded-lg p-5 transition hover:border-yellow-500/50"
//                 >
//                   <h4 className="text-lg font-semibold text-white">{prod}</h4>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarketDetailPage;
'use client';

import { useParams } from 'next/navigation'; 
import Image from 'next/image';
import Link from 'next/link';
import { markets } from '@/data/market'; 
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { FC } from 'react';
import { motion } from 'framer-motion'; // Added for animations

const MarketDetailPage: FC = () => {
  const params = useParams(); 
  const slug = params.slug; 

  const market = markets.find(m => m.slug === slug);

  if (!market) {
    return (
      <div className="bg-background-dark text-text-light min-h-screen flex items-center justify-center">
        <p>Market data not found.</p>
      </div>
    );
  }

  return (
    // ✅ APPEALING: Added subtle gradient to background
    <div className="bg-gradient-to-b from-background-dark to-background-card text-text-light min-h-screen font-sans">
      
      {/* Header with Background Image */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={market.image}
          alt={market.title}
          fill
          unoptimized
          className="object-cover opacity-20" // Reduced opacity to show background
        />
        {/* ✅ APPEALING: Overlay with a hint of primary color */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/70 to-primary/10"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-7xl mx-auto w-full">
          {/* ✅ APPEALING: "Back" link now uses secondary teal color */}
          <Link 
            href="/markets" 
            className="flex items-center text-secondary hover:text-secondary-hover transition group mb-4 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to All Markets
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-text-light shadow-lg">
            {market.title}
          </h1>
        </div>
      </div>

      {/* Content Area */}
      <motion.div 
        className="max-w-7xl mx-auto p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* ✅ APPEALING: Gradient text for heading */}
            <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Sector Overview
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {market.detailedInfo.overview}
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* ✅ APPEALING: Added subtle glow and premium border */}
            <div className="bg-background-card border border-primary/30 rounded-lg p-6 sticky top-28 shadow-lg shadow-primary/10">
              <h3 className="text-2xl font-semibold mb-5 text-text-light">
                Key Applications
              </h3>
              <ul className="space-y-4">
                {market.detailedInfo.applications.map((app) => (
                  <li key={app} className="flex items-start transition-colors hover:text-text-light">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-text-secondary">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Full-width Products Section */}
          <div className="lg:col-span-3 mt-8">
            {/* ✅ APPEALING: Gradient text for heading */}
            <h3 className="text-3xl font-semibold mb-5 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Relevant Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {market.detailedInfo.relevantProducts.map((prod) => (
                <motion.div 
                  key={prod} 
                  // ✅ APPEALING: Added interactive hover effect
                  className="bg-background-card border border-border-color/20 rounded-lg p-5 transition-all duration-300 hover:border-primary hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10"
                  whileHover={{ scale: 1.03 }}
                >
                  <h4 className="text-lg font-semibold text-text-light">{prod}</h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default MarketDetailPage;