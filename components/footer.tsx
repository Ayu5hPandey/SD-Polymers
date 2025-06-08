// import {
//     Mail,
//     Phone,
//     MapPin,
//     Facebook,
//     Twitter,
//     Linkedin,
//     Youtube
//   } from "lucide-react"
//   import { Button } from "@/components/ui/button"
//   import { Separator } from "@/components/ui/separator"
  
//   const Footer = () => {
//     return (
//       <footer className="bg-slate-900 text-white">
//         <div className="container mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Company Info */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-bold text-blue-400">PolymerTech PVC</h3>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 Leading manufacturer of high-quality PVC compounds and polymer
//                 solutions for industrial applications worldwide.
//               </p>
//               <div className="flex space-x-3">
//                 <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
//                   <Facebook className="h-5 w-5" />
//                 </Button>
//                 <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
//                   <Twitter className="h-5 w-5" />
//                 </Button>
//                 <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
//                   <Linkedin className="h-5 w-5" />
//                 </Button>
//                 <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
//                   <Youtube className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>
  
//             {/* Products & Services */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold text-blue-400">Products & Services</h4>
//               <ul className="space-y-2 text-sm">
//                 {[
//                   "Rigid PVC Compounds",
//                   "Flexible PVC Compounds",
//                   "Cable Grade Compounds",
//                   "Medical Grade PVC",
//                   "Custom Formulations",
//                   "Technical Support"
//                 ].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
  
//             {/* Industries */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold text-blue-400">Industries</h4>
//               <ul className="space-y-2 text-sm">
//                 {[
//                   "Construction",
//                   "Automotive",
//                   "Electronics",
//                   "Healthcare",
//                   "Packaging",
//                   "Infrastructure"
//                 ].map((industry) => (
//                   <li key={industry}>
//                     <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                       {industry}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
  
//             {/* Contact Info */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold text-blue-400">Contact Us</h4>
//               <div className="space-y-3 text-sm">
//                 <div className="flex items-start space-x-3">
//                   <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
//                   <div className="text-gray-300">
//                     <p>123 Industrial Drive</p>
//                     <p>Chemical Valley, TX 77001</p>
//                     <p>United States</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
//                   <span className="text-gray-300">+1 (555) 123-4567</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
//                   <span className="text-gray-300">info@polymertechpvc.com</span>
//                 </div>
//               </div>
//             </div>
//           </div>
  
//           <Separator className="my-8 bg-gray-700" />
  
//           {/* Bottom Section */}
//           <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
//             <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
//               <p>&copy; 2024 PolymerTech PVC. All rights reserved.</p>
//               <div className="flex space-x-4">
//                 <a href="#" className="hover:text-white transition-colors">
//                   Privacy Policy
//                 </a>
//                 <a href="#" className="hover:text-white transition-colors">
//                   Terms of Service
//                 </a>
//                 <a href="#" className="hover:text-white transition-colors">
//                   Quality Certifications
//                 </a>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4 text-xs text-gray-400">
//               <span>ISO 9001:2015 Certified</span>
//               <span>•</span>
//               <span>REACH Compliant</span>
//               <span>•</span>
//               <span>RoHS Certified</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     )
//   }
  
//   export default Footer
  