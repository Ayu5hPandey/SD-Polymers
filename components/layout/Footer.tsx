// "use client"

// import {
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react"
// import { Separator } from "@/components/ui/separator"
// import { FaWhatsapp } from "react-icons/fa"
// import Link from "next/link" // Import Link

// const Footer = () => {

//   const products = [
//     { name: "PVC Granules", href: "/products/pvc-granules" },
//     { name: "Cable Ties", href: "/products/cable-ties" },
//     { name: "Silicone Braided Wires", href: "/products/silicone-braided-wires" },
//     { name: "CAT 5 Cables", href: "/products/cat-5-cables" },
//     { name: "PVC Electrical Tape", href: "/products/pvc-electrical-tape" },
//     { name: "Terminal Sleeves", href: "/products/terminal-sleeves" },
//     { name: "Connectors & Harness", href: "/products/connectors-harness" },
//   ];

//   // ✅ URLs for the addresses
//   // Unit 1: Uses the precise coordinates you provided
//   const unit1Url = "https://www.google.com/maps/search/?api=1&query=28.7429034,77.3001252";
  
//   // Unit 2: Searches for the address. 
//   // We can update this if you provide coordinates for Unit 2.
//   const unit2Url = "https://www.google.com/maps/search/?api=1&query=KH+-+761,+Bisokhar+Road,+Bisokhar,+Modinagar+-+201204";


//   return (
//     <footer className="bg-slate-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* LEFT SIDE - Company Info */}
//           <div className="flex flex-col items-start space-y-6">
//             <h3 className="text-4xl lg:text-5xl font-extrabold tracking-wide">
//               SD Polymers
//             </h3>

//             {/* WhatsApp Button */}
//             <div className="pt-2 flex flex-col items-start">
//               <a
//                 href="https://wa.me/919891758899"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex flex-col items-center group"
//               >
//                 <div className="p-4 rounded-full bg-slate-800 group-hover:bg-green-500 transition-all duration-300 transform group-hover:scale-110">
//                   <FaWhatsapp className="h-8 w-8 text-white" />
//                 </div>
//                 <span className="mt-2 text-sm text-gray-300 group-hover:text-green-400 transition-colors">
//                   Chat on WhatsApp
//                 </span>
//               </a>
//             </div>
//           </div>

//           {/* RIGHT SIDE - Products + Contact */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {/* Products */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold text-white">Products</h4>
//               <ul className="space-y-2 text-sm">
//                 {products.map((product) => (
//                   <li key={product.name}>
//                     <Link
//                       href={product.href}
//                       className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
//                     >
//                       {product.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold text-white">Contact Us</h4>
//               <div className="space-y-3 text-sm">
//                 {/* ✅ Unit 1 Address Link */}
//                 <a
//                   href={unit1Url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-start space-x-3 group"
//                 >
//                   <MapPin className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
//                   <div className="text-gray-300 group-hover:text-white transition-colors">
//                     <p>Unit 1 - A-67, KH - 147715</p>
//                     <p>Roopnagar Industrial Area, Loni</p>
//                     <p>Ghaziabad, Uttar Pradesh - 201102</p>
//                   </div>
//                 </a>
//                 {/* ✅ Unit 2 Address Link */}
//                 <a
//                   href={unit2Url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-start space-x-3 group"
//                 >
//                   <MapPin className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
//                   <div className="text-gray-300 group-hover:text-white transition-colors">
//                     <p>Unit 2 - KH - 761, Bisokhar Road</p>
//                     <p>Bisokhar, Modinagar - 201204</p>
//                   </div>
//                 </a>
//                 <div className="flex items-center space-x-3">
//                   <Phone className="h-4 w-4 text-white flex-shrink-0" />
//                   <span className="text-gray-300">+91 98917 58899</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Mail className="h-4 w-4 text-white flex-shrink-0" />
//                   <span className="text-gray-300">contact@sdpolymers.in</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Separator className="my-8 bg-gray-700" />

//         {/* Bottom Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
//           <p className="text-sm text-gray-400 text-center lg:text-left">
//             © {new Date().getFullYear()} SD Polymers. All rights reserved.
//           </p>
//           <div className="flex items-center space-x-4 text-xs text-gray-400">
//             <span>ISO 9001:2015 Certified</span>
//             <span>•</span>
//             <span>REACH Compliant</span>
//             <span>•</span>
//             <span>RoHS Certified</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
"use client"

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { Separator } from "@/components/ui/separator" 
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link" 

const Footer = () => {

  // ✅ This product array is now fixed
  const products = [
    { name: "PVC Granules", href: "/products/pvc-granules" },
    { name: "Cable Ties", href: "/products/cable-ties" },
    { name: "Silicone Braided Wires", href: "/products/silicone-braided-wires" },
    { name: "CAT 5 Cables", href: "/products/cat-5-cables" },
    { name: "PVC Electrical Tape", href: "/products/pvc-electrical-tape" },
    { name: "Terminal Sleeves", href: "/products/terminal-sleeves" },
    { name: "Connectors & Harness", href: "/products/connectors-harness" },
  ];

  const unit1Url = "https://www.google.com/maps/search/?api=1&query=28.7429034,77.3001252";
  const unit2Url = "https://www.google.com/maps/search/?api=1&query=KH+-+761,+Bisokhar+Road,+Bisokhar,+Modinagar+-+201204";

  return (
    <footer className="bg-background-dark text-text-light border-t border-border-color/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Company Info */}
          <div className="flex flex-col items-start space-y-6">
            <h3 className="text-4xl lg:text-5xl font-extrabold tracking-wide">
              SD Polymers
            </h3>

            {/* WhatsApp Button */}
            <div className="pt-2 flex flex-col items-start">
              <a
                href="https://wa.me/919891758899"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="p-4 rounded-full bg-background-card group-hover:bg-green-500 transition-all duration-300 transform group-hover:scale-110">
                  <FaWhatsapp className="h-8 w-8 text-text-light" />
                </div>
                <span className="mt-2 text-sm text-text-secondary group-hover:text-green-400 transition-colors">
                  Chat on WhatsApp
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - Products + Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-light">Products</h4>
              <ul className="space-y-2 text-sm">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link
                      href={product.href}
                      className="text-text-secondary hover:text-secondary transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-light">Contact Us</h4>
              <div className="space-y-3 text-sm">
                {/* Unit 1 Address Link */}
                <a
                  href={unit1Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 group"
                >
                  <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-text-secondary group-hover:text-text-light transition-colors">
                    <p>Unit 1 - A-67, KH - 147715</p>
                    <p>Roopnagar Industrial Area, Loni</p>
                    <p>Ghaziabad, Uttar Pradesh - 201102</p>
                  </div>
                </a>
                {/* Unit 2 Address Link */}
                <a
                  href={unit2Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 group"
                >
                  <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-text-secondary group-hover:text-text-light transition-colors">
                    <p>Unit 2 - KH - 761, Bisokhar Road</p>
                    <p>Bisokhar, Modinagar - 201204</p>
                  </div>
                </a>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-text-secondary">+91 98917 58899</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-text-secondary">contact@sdpolymers.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border-color/30" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-sm text-text-secondary text-center lg:text-left">
            © {new Date().getFullYear()} SD Polymers. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-xs text-text-secondary">
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>REACH Compliant</span>
            <span>•</span>
            <span>RoHS Certified</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer