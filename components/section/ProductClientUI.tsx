// 'use client'; // This is CRITICAL. It makes this an interactive client component.

// import React, { useState, useMemo } from 'react';
// import Image from 'next/image'; // Use Next.js Image component
// import { ProductVariant } from '@/lib/products'; // Adjust path if needed

// // =================================================================
// // 1. MODAL COMPONENT
// // =================================================================
// interface ModalProps {
//   variant: ProductVariant;
//   onClose: () => void;
// }

// const ProductModal: React.FC<ModalProps> = ({ variant, onClose }) => {
//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
//       onClick={onClose}
//     >
//       <div 
//         className="relative flex flex-col w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl m-4 md:flex-row"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button 
//           onClick={onClose}
//           className="absolute top-3 right-3 z-10 p-2 text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200"
//         >
//           {/* SVG Close Icon */}
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
//         </button>
        
//         {/* Image */}
//         <div className="relative w-full md:w-1/2 p-4 bg-gray-50 flex items-center justify-center">
//           <Image 
//             src={variant.image} 
//             alt={variant.name} 
//             width={500} // Example width
//             height={500} // Example height
//             className="object-contain w-full h-auto max-h-96 rounded-lg"
//           />
//         </div>
        
//         {/* Details */}
//         <div className="w-full md:w-1/2 p-6 text-black">
//           <h2 className="text-2xl font-bold text-gray-900">{variant.name}</h2>
//           <p className="mt-2 text-gray-600">{variant.description}</p>
          
//           <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-800">Specifications</h3>
//           <div className="overflow-x-auto border border-gray-200 rounded-md">
//             <table className="min-w-full divide-y divide-gray-200">
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {Object.entries(variant.specs).map(([key, value]) => (
//                   <tr key={key}>
//                     <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50">{key}</td>
//                     <td className="px-4 py-3 text-sm text-gray-900 font-mono">{value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
          
//           <button className="w-full px-6 py-3 mt-8 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
//             Request a Quote
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // =================================================================
// // 2. CARD COMPONENT
// // =================================================================
// interface CardProps {
//   variant: ProductVariant;
//   onViewDetails: (variant: ProductVariant) => void;
// }

// const ProductCard: React.FC<CardProps> = ({ variant, onViewDetails }) => {
//   return (
//     <div className="flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md text-black">
//       {/* Image */}
//       <div className="relative w-full h-48">
//         <Image 
//           className="object-cover" 
//           src={variant.image} 
//           alt={variant.name}
//           fill // Makes image cover the div
//           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//           onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/eeeeee/aaaaaa?text=Image+Not+Found')} 
//         />
//       </div>
      
//       {/* Content */}
//       <div className="flex flex-col justify-between flex-1 p-4">
//         <div>
//           <h3 className="text-lg font-bold text-gray-900">{variant.name}</h3>
//           <p className="mt-1 text-base font-semibold text-blue-700 font-mono truncate">
//             {variant.specs["Part Name"] || Object.values(variant.specs)[0]}
//           </p>
//           <p className="mt-2 text-sm text-gray-500 h-10 line-clamp-2">
//             {variant.description}
//           </p>
//         </div>
        
//         <button 
//           onClick={() => onViewDetails(variant)}
//           className="w-full px-4 py-2 mt-4 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// // =================================================================
// // 3. MAIN UI COMPONENT (Grid, Search, Modal State)
// // =================================================================
// interface GridProps {
//   variants: ProductVariant[];
// }

// export const ProductClientUI: React.FC<GridProps> = ({ variants }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

//   const filteredVariants = useMemo(() => {
//     const lowerCaseSearch = searchTerm.toLowerCase();
//     if (!lowerCaseSearch) return variants;
    
//     return variants.filter(variant =>
//       variant.name.toLowerCase().includes(lowerCaseSearch) ||
//       variant.description.toLowerCase().includes(lowerCaseSearch) ||
//       Object.values(variant.specs).some(spec => 
//         spec.toLowerCase().includes(lowerCaseSearch)
//       )
//     );
//   }, [variants, searchTerm]);

//   return (
//     <div className="w-full">
//       {/* Search Bar */}
//       <div className="mb-8">
//         <input 
//           type="text"
//           placeholder="Search by Part Name, ID, or description..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Product Grid */}
//       {filteredVariants.length > 0 ? (
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {filteredVariants.map(variant => (
//             <ProductCard 
//               key={variant.name} 
//               variant={variant} 
//               onViewDetails={setSelectedVariant}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="py-12 text-center text-gray-400">
//           <h3 className="text-xl font-medium">No Products Found</h3>
//           <p className="mt-2">Try adjusting your search term.</p>
//         </div>
//       )}

//       {/* Modal */}
//       {selectedVariant && (
//         <ProductModal 
//           variant={selectedVariant} 
//           onClose={() => setSelectedVariant(null)} 
//         />
//       )}
//     </div>
//   );
// };
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { ProductVariant } from '../../data/products'; 
import { X, Search, ArrowRight } from 'lucide-react'; // Added icons for better UI

const ITEMS_PER_PAGE = 12;

// Helper for fallback images
const placeholder = (text: string) => {
  const encodedText = encodeURIComponent(text);
  return `https://placehold.co/600x400/003366/FFFFFF?text=${encodedText}`;
};

// =================================================================
// 1. MODAL COMPONENT (The Popup)
// =================================================================
interface ModalProps {
  variant: ProductVariant;
  onClose: () => void;
}

const ProductModal: React.FC<ModalProps> = ({ variant, onClose }) => {
  return (
    // Backdrop with blur
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Modal Content - THEMED */}
      <div 
        className="relative flex flex-col w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background-card border border-border-color/50 rounded-2xl shadow-2xl m-4 md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-text-secondary bg-background-dark/50 rounded-full hover:bg-primary hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Image Side */}
        <div className="relative w-full md:w-1/2 p-8 bg-background-dark flex items-center justify-center">
          <Image 
            src={variant.image} 
            alt={variant.name} 
            width={500}
            height={500}
            className="object-contain w-full h-auto max-h-80 rounded-lg drop-shadow-2xl"
            onError={(e) => (e.currentTarget.src = placeholder(variant.name))}
          />
        </div>
        
        {/* Details Side */}
        <div className="w-full md:w-1/2 p-8 text-text-light bg-background-card">
          <h2 className="text-2xl font-bold text-text-light mb-2">{variant.name}</h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">{variant.description}</p>
          
          <h3 className="text-lg font-semibold text-primary mb-4">Specifications</h3>
          
          {/* Specs Table - THEMED */}
          <div className="overflow-hidden border border-border-color/30 rounded-lg">
            <table className="min-w-full divide-y divide-border-color/30">
              <tbody className="divide-y divide-border-color/30">
                {Object.entries(variant.specs).map(([key, value]) => (
                  <tr key={key} className="group hover:bg-background-dark/30 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-text-secondary bg-background-dark/20 w-1/3">{key}</td>
                    <td className="px-4 py-3 text-sm text-text-light font-mono">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* ❌ REMOVED: "Request a Quote" button is gone from here as requested */}
        </div>
      </div>
    </div>
  );
};

// =================================================================
// 2. CARD COMPONENT
// =================================================================
interface CardProps {
  variant: ProductVariant;
  onViewDetails: (variant: ProductVariant) => void;
}

const ProductCard: React.FC<CardProps> = ({ variant, onViewDetails }) => {
  return (
    // THEMED: Dark card with border and hover effects
    <div className="flex flex-col overflow-hidden bg-background-card border border-border-color/20 rounded-xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 group">
      {/* Image Area */}
      <div className="relative w-full h-48 bg-white p-4"> {/* White bg for image clarity */}
        <Image 
          className="object-contain" 
          src={variant.image} 
          alt={variant.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => (e.currentTarget.src = placeholder(variant.name))} 
        />
      </div>
      
      {/* Content Area */}
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <h3 className="text-lg font-bold text-text-light truncate mb-1 group-hover:text-primary transition-colors">{variant.name}</h3>
          <p className="text-sm font-semibold text-secondary font-mono truncate mb-3">
            {variant.specs["Part Name"] || Object.values(variant.specs)[0]}
          </p>
          <p className="text-sm text-text-secondary h-10 line-clamp-2 mb-4">
            {variant.description}
          </p>
        </div>
        
        {/* View Details Button - THEMED */}
        <button 
          onClick={() => onViewDetails(variant)}
          className="w-full px-4 py-2 text-sm font-semibold text-text-light bg-background-dark border border-border-color/30 rounded-lg hover:bg-primary hover:border-primary transition-all flex items-center justify-center gap-2"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// =================================================================
// 3. MAIN UI COMPONENT
// =================================================================
interface GridProps {
  variants: ProductVariant[];
}

export const ProductClientUI: React.FC<GridProps> = ({ variants }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredVariants = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (!lowerCaseSearch) return variants;
    
    return variants.filter(variant =>
      variant.name.toLowerCase().includes(lowerCaseSearch) ||
      variant.description.toLowerCase().includes(lowerCaseSearch) ||
      Object.values(variant.specs).some(spec => 
        String(spec).toLowerCase().includes(lowerCaseSearch)
      )
    );
  }, [variants, searchTerm]);

  const visibleVariants = useMemo(() => {
    return filteredVariants.slice(0, visibleCount);
  }, [filteredVariants, visibleCount]);
  
  React.useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm]);

  const handleOpenModal = (variant: ProductVariant) => {
    setSelectedVariant(variant);
  };

  const handleCloseModal = () => {
    setSelectedVariant(null);
  };

  return (
    <div className="w-full">
      {/* Search Bar - THEMED */}
      <div className="mb-8 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5" />
        <input 
          type="text"
          placeholder={`Search within ${variants.length} variants...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 text-base text-text-light bg-background-card border border-border-color/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-text-secondary/50 transition-all"
        />
      </div>

      {/* Product Grid */}
      {visibleVariants.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleVariants.map(variant => (
            <ProductCard 
              key={variant.name} 
              variant={variant} 
              onViewDetails={handleOpenModal}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background-card mb-4">
            <Search className="w-8 h-8 text-text-secondary" />
          </div>
          <h3 className="text-xl font-medium text-text-light">No Products Found</h3>
          <p className="mt-2 text-text-secondary">Try adjusting your search term.</p>
        </div>
      )}
      
      {/* View More Button - THEMED */}
      {filteredVariants.length > visibleCount && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
            className="px-8 py-3 font-bold text-text-light bg-background-card border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/25"
          >
            View More Products
            <span className="ml-2 text-xs font-normal opacity-80">
              ({visibleCount} of {filteredVariants.length} shown)
            </span>
          </button>
        </div>
      )}

      {/* Modal Render */}
      {selectedVariant && (
        <ProductModal 
          variant={selectedVariant} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};