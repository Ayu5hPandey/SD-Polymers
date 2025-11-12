// import { products } from "@/lib/products"; // Adjust path if needed
// import { notFound } from "next/navigation";
// import { ProductClientUI } from "./ProductClientUI"; // Import our new Client Component
// import { Product } from "@/lib/products"; // Import the type
// import type { Metadata } from 'next';

// // --- Props Interface ---
// interface Props {
//   params: { slug: string };
// }

// // =================================================================
// // 1. GENERATE METADATA (Replaces <Head>)
// // =================================================================
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const decodedSlug = decodeURIComponent(params.slug);
//   const product = products.find((p) => p.slug === decodedSlug);

//   if (!product) {
//     return {
//       title: 'Product Not Found',
//     };
//   }

//   return {
//     title: `${product.title} | Product Catalog`,
//     description: product.description,
//   };
// }

// // =================================================================
// // 2. THE PAGE COMPONENT (Server Component)
// // =================================================================
// export default async function ProductPage({ params }: Props) {
//   const { slug } = params;
//   const decodedSlug = decodeURIComponent(slug);
//   const product = products.find((p) => p.slug === decodedSlug);

//   if (!product) {
//     console.log("❌ Product not found for slug:", decodedSlug);
//     notFound(); // This will show your not-found.tsx page
//   }

//   // This page is a Server Component, so this data is fetched on the server.
//   // We pass the data to the Client Component, which handles interaction.
//   return (
//     <div className="container max-w-7xl mx-auto px-4 py-12">
//       {/* This part is rendered on the server */}
//       <div className="pb-8 mb-8 border-b border-gray-700">
//         <h1 className="text-4xl font-bold tracking-tight text-white">
//           {product.title}
//         </h1>
//         <p className="mt-4 text-lg text-gray-400">
//           {product.description}
//         </p>
//       </div>

//       {/* This is our interactive Client Component.
//         We pass the server-fetched variants to it as a prop.
//       */}
//       <ProductClientUI variants={product.variants} />

//     </div>
//   );
// }

// // =================================================================
// // 3. GENERATE STATIC PARAMS (Your existing function, good!)
// // =================================================================
// export async function generateStaticParams() {
//   return products.map((product) => ({
//     slug: encodeURIComponent(product.slug),
//   }));
// }
import { products } from "../../../data/products"; // <-- FIX: Relative path from app/products/[slug] to lib
import { notFound } from "next/navigation";
import { ProductClientUI } from "../../../components/section/ProductClientUI"; // <-- FIX: Relative path in same folder
import { Product } from "../../../data/products"; // <-- FIX: Relative path from app/products/[slug] to lib
import type { Metadata } from 'next';
import { SafeImage } from "../../../components/ui/Safelmage"; // <-- FIX: Relative path in same folder

// --- Props Interface ---
interface Props {
  params: Promise<{ slug: string }>;
}

// =================================================================
// 1. GENERATE METADATA
// =================================================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // --- FIX: Awaiting params as requested by the error ---
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const product = products.find((p) => p.slug === decodedSlug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.title} | Product Catalog`,
    description: product.description,
  };
}

// =================================================================
// 2. THE PAGE COMPONENT
// =================================================================
export default async function ProductPage({ params }: Props) {
  // --- FIX: Awaiting params as requested by the error ---
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const product = products.find((p) => p.slug === decodedSlug);

  if (!product) {
    console.log("❌ Product not found for slug:", decodedSlug);
    notFound(); 
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="pb-8 mb-8 border-b border-gray-700">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Header Text */}
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {product.title}
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              {product.description}
            </p>
          </div>
          {/* Header Image */}
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
            
            {/* --- FIX: Using our new SafeImage component --- */}
            <SafeImage
              src={product.categoryImage}
              alt={`${product.title} category image`}
              width={400}
              height={300}
              priority
              className="rounded-lg object-cover w-full h-auto aspect-[4/3] shadow-lg"
              fallbackText="Category Image"
            />
            {/* --- END OF FIX --- */}

          </div>
        </div>
      </div>

      {/* Interactive Client Component (Grid, Search, Modal) */}
      <ProductClientUI variants={product.variants} />

      {/* General Product Information Section */}
      <div className="mt-20 pt-10 border-t border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6">
          General Product Information
        </h2>
        <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
          {product.details}
        </div>
      </div>

    </div>
  );
}

// =================================================================
// 3. GENERATE STATIC PARAMS (This builds all your pages)
// =================================================================
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: encodeURIComponent(product.slug),
  }));
}

