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

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link" 

const Footer = () => {
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

  // ✅ PRE-FILLED EMAIL CONFIGURATION
  const email = "contact@sdpolymers.in";
  const subject = "Product Inquiry - SD Polymers Website";
  const body = "Hello SD Polymers Team,%0D%0A%0D%0AI am interested in your products and would like to know more about...";
  
  // This creates the magic link: mailto:email?subject=...&body=...
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;

  return (
    <footer className="bg-background-dark text-text-light border-t border-border-color/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDE - Company Info */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <div>
              <h3 className="text-3xl font-extrabold tracking-wide text-text-light">SD Polymers</h3>
              <p className="text-text-secondary mt-4 leading-relaxed max-w-md">
                Leading manufacturer of advanced polymer solutions, delivering quality and innovation to industries worldwide since 2021.
              </p>
            </div>

            <a
              href="https://wa.me/919891758899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-secondary/10 border border-secondary/30 px-5 py-3 rounded-xl hover:bg-secondary/20 transition-all group"
            >
              <MessageCircle className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
              <div>
                <span className="block text-xs text-text-secondary uppercase tracking-wider">Chat with us</span>
                <span className="font-semibold text-text-light">WhatsApp Support</span>
              </div>
            </a>
          </div>

          {/* RIGHT SIDE - Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Products */}
            <div>
              <h4 className="text-lg font-bold text-text-light mb-6 border-l-4 border-primary pl-3">Products</h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link
                      href={product.href}
                      className="text-text-secondary hover:text-primary transition-colors block py-1"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-text-light mb-6 border-l-4 border-secondary pl-3">Contact Us</h4>
              <div className="space-y-4 text-sm">
                <a href={unit1Url} target="_blank" className="flex items-start space-x-3 group">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0 group-hover:text-text-light transition-colors" />
                  <div className="text-text-secondary group-hover:text-text-light transition-colors">
                    <p className="font-medium text-text-light">Unit 1</p>
                    <p>Roopnagar Industrial Area, Loni<br/>Ghaziabad - 201102</p>
                  </div>
                </a>
                <a href={unit2Url} target="_blank" className="flex items-start space-x-3 group">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0 group-hover:text-text-light transition-colors" />
                  <div className="text-text-secondary group-hover:text-text-light transition-colors">
                    <p className="font-medium text-text-light">Unit 2</p>
                    <p>Bisokhar Road, Modinagar<br/>Ghaziabad - 201204</p>
                  </div>
                </a>
                <a href="tel:+919891758899" className="flex items-center space-x-3 pt-2 border-t border-border-color/20 group">
                  <Phone className="h-4 w-4 text-secondary group-hover:text-text-light transition-colors" />
                  <span className="text-text-light font-medium group-hover:text-primary transition-colors">+91 98917 58899</span>
                </a>
                
                {/* ✅ SMART EMAIL LINK */}
                <a href={mailtoLink} className="flex items-center space-x-3 group">
                  <Mail className="h-4 w-4 text-secondary group-hover:text-text-light transition-colors" />
                  <span className="text-text-secondary group-hover:text-primary transition-colors">contact@sdpolymers.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-border-color/20 w-full" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} SD Polymers. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-text-secondary font-medium bg-background-card/50 px-4 py-2 rounded-full">
            <span>ISO 9001:2015 Certified</span>
            <span className="hidden sm:inline text-border-color/50">•</span>
            <span>REACH Compliant</span>
            <span className="hidden sm:inline text-border-color/50">•</span>
            <span>RoHS Certified</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer