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
'use client'; // This is CRITICAL. It makes this an interactive client component.

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { ProductVariant } from '../../data/products'; // <-- FIX: Relative path

const ITEMS_PER_PAGE = 12; // Show 12 items at a time

// Helper function (in case it's needed for error fallback)
const placeholder = (text: string) => {
  const encodedText = encodeURIComponent(text);
  return `https://placehold.co/600x400/333333/777777?text=${encodedText}`;
};

// =================================================================
// 1. MODAL COMPONENT
// =================================================================
interface ModalProps {
  variant: ProductVariant;
  onClose: () => void;
}

const ProductModal: React.FC<ModalProps> = ({ variant, onClose }) => {
  return (
    // Backdrop
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div 
        className="relative flex flex-col w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl m-4 md:flex-row"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        {/* Image */}
        <div className="relative w-full md:w-1/2 p-4 bg-gray-50 flex items-center justify-center">
          <Image 
            src={variant.image} 
            alt={variant.name} 
            width={500}
            height={500}
            className="object-contain w-full h-auto max-h-96 rounded-lg"
            // Fallback for broken real images
            onError={(e) => (e.currentTarget.src = placeholder(variant.name))}
          />
        </div>
        
        {/* Details */}
        <div className="w-full md:w-1/2 p-6 text-black">
          <h2 className="text-2xl font-bold text-gray-900">{variant.name}</h2>
          <p className="mt-2 text-gray-600">{variant.description}</p>
          
          <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-800">Specifications</h3>
          <div className="overflow-x-auto border border-gray-200 rounded-md">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(variant.specs).map(([key, value]) => (
                  <tr key={key}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50">{key}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-mono">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <button className="w-full px-6 py-3 mt-8 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Request a Quote
          </button>
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
    <div className="flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md text-black">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image 
          className="object-cover" 
          src={variant.image} 
          alt={variant.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          // Fallback for broken real images
          onError={(e) => (e.currentTarget.src = placeholder(variant.name))} 
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 truncate">{variant.name}</h3>
          <p className="mt-1 text-base font-semibold text-blue-700 font-mono truncate">
            {variant.specs["Part Name"] || Object.values(variant.specs)[0]}
          </p>
          <p className="mt-2 text-sm text-gray-500 h-10 line-clamp-2">
            {variant.description}
          </p>
        </div>
        
        {/* Button */}
        <button 
          onClick={() => onViewDetails(variant)}
          className="w-full px-4 py-2 mt-4 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

// =================================================================
// 3. MAIN UI COMPONENT (UPDATED with "View More")
// =================================================================
interface GridProps {
  variants: ProductVariant[];
}

export const ProductClientUI: React.FC<GridProps> = ({ variants }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  
  // --- NEW STATE FOR "VIEW MORE" ---
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // This list filters based on the search term
  const filteredVariants = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (!lowerCaseSearch) return variants;
    
    return variants.filter(variant =>
      variant.name.toLowerCase().includes(lowerCaseSearch) ||
      variant.description.toLowerCase().includes(lowerCaseSearch) ||
      Object.values(variant.specs).some(spec => 
        // --- THIS IS THE FIX ---
        // We convert `spec` to a string *before* calling .toLowerCase()
        // This prevents crashes if `spec` is a number (e.g., 2.88)
        String(spec).toLowerCase().includes(lowerCaseSearch)
        // --- END OF FIX ---
      )
    );
  }, [variants, searchTerm]);

  // --- NEW: This list takes the *filtered* list and slices it ---
  const visibleVariants = useMemo(() => {
    return filteredVariants.slice(0, visibleCount);
  }, [filteredVariants, visibleCount]);
  
  // Reset visible count when search term changes
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
      {/* Search Bar */}
      <div className="mb-8">
        <input 
          type="text"
          placeholder={`Search within ${variants.length} variants...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product Grid (now maps `visibleVariants`) */}
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
        <div className="py-12 text-center text-gray-400">
          <h3 className="text-xl font-medium">No Products Found</h3>
          <p className="mt-2">Try adjusting your search term.</p>
        </div>
      )}
      
      {/* --- NEW "VIEW MORE" BUTTON --- */}
      {filteredVariants.length > visibleCount && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
            className="px-6 py-3 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            View More
            ({visibleCount} of {filteredVariants.length} shown)
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedVariant && (
        <ProductModal 
          variant={selectedVariant} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};