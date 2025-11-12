// // app/about/page.tsx
// 'use client';

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// type FormState = { name: string; email: string; message: string };

// export default function AboutPage() {
//   const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (loading) return;
//     setLoading(true);
//     setStatus("Sending...");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         setStatus("Message sent successfully!");
//         setForm({ name: "", email: "", message: "" });
//       } else {
//         // try to extract message from response
//         const json = await res.json().catch(() => null);
//         setStatus(json?.error || "Something went wrong. Try again.");
//       }
//     } catch (err) {
//       setStatus("Error sending message. Check your network or server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 text-gray-800">
//       {/* HERO */}
//       <section className="relative bg-black text-white py-20">
//         <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-full lg:w-1/2"
//           >
//             <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">SD Polymers</h1>
//             <p className="mt-4 text-lg lg:text-xl max-w-2xl text-gray-300">
//               Manufacturer of PVC Granules, Dip-Moulded terminal parts, connectors and wire harness components — trusted quality with{" "}
//               <span className="font-semibold text-white">ROHS & REACH</span> certified materials.
//             </p>

//             <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <div className="bg-white/10 p-4 rounded-lg">
//                 <dt className="text-xs uppercase text-gray-400">Founded</dt>
//                 <dd className="text-lg font-semibold text-white">2021</dd>
//               </div>
//               <div className="bg-white/10 p-4 rounded-lg">
//                 <dt className="text-xs uppercase text-gray-400">Founders</dt>
//                 <dd className="text-lg font-semibold text-white">Ravishankar Pandey & Bani Singh Dagur</dd>
//               </div>
//               <div className="bg-white/10 p-4 rounded-lg">
//                 <dt className="text-xs uppercase text-gray-400">Locations</dt>
//                 <dd className="text-lg font-semibold text-white">Ghaziabad, Uttar Pradesh</dd>
//               </div>
//             </dl>

//             <div className="mt-6 flex gap-3">
//               <a href="#contact" className="inline-block bg-white text-black font-semibold px-5 py-3 rounded-lg shadow hover:bg-gray-200 transition">
//                 Contact Us
//               </a>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-full lg:w-1/2 flex justify-center"
//           >
//             <div className="relative w-80 h-56 lg:w-[520px] lg:h-[320px] rounded-xl overflow-hidden shadow-2xl bg-white/10">
//               <Image src="/images/hero.jpg" alt="SD Polymers products" fill style={{ objectFit: "cover" }} priority />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* COMPANY PROFILE */}
//       <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="container mx-auto px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold">Company Profile</h2>
//             <p className="mt-4 text-gray-600">
//               SD Polymers is a Ghaziabad-based manufacturer established in <strong>2021</strong> by <strong>Ravishankar Pandey</strong> and <strong>Bani Singh Dagur</strong>.
//               We specialize in producing high-quality <strong>PVC granules</strong> and a wide range of electrical components including dip-moulded terminal sleeves, connectors (C110, C90 series),
//               fuse holders, silicone braided wires, CAT-5 cables, electrical tapes and more. Our products are built for consistent performance across electrical, automotive and industrial applications —
//               and our materials are <strong>ROHS & REACH</strong> certified.
//             </p>

//             <div className="mt-6 grid sm:grid-cols-2 gap-4">
//               <div className="p-4 bg-white rounded-lg shadow">
//                 <h3 className="font-semibold">Infrastructure</h3>
//                 <p className="text-sm text-gray-600 mt-2">In-house compounding and dip-moulding facilities with QC and packaging lines.</p>
//               </div>
//               <div className="p-4 bg-white rounded-lg shadow">
//                 <h3 className="font-semibold">Quality & Compliance</h3>
//                 <p className="text-sm text-gray-600 mt-2">ROHS & REACH compliant materials; focus on on-time delivery and consistent performance.</p>
//               </div>
//             </div>
//           </div>

//           <aside className="bg-white rounded-lg shadow p-6">
//             <h4 className="text-sm uppercase text-gray-500 tracking-wide">Contact</h4>
//             <p className="mt-3 font-medium">SD Polymers</p>
//             <p className="text-sm text-gray-600 mt-1">Unit 1 - A-67, KH - 147715, Roopnagar Industrial Area, Loni, Ghaziabad - 201102</p>
//             <p className="text-sm text-gray-600 mt-1">Unit 2 - KH - 761, Bisokhar Road, Bisokhar, Modinagar - 201204</p>

//             <div className="mt-4">
//               <a className="text-sm text-blue-600 font-medium block" href="tel:+918991758899">📞 +91 98917 58899</a>
//               <a className="text-sm text-blue-600 font-medium block" href="mailto:contact@sdpolymers.in">✉️ contact@sdpolymers.in</a>
//               <a className="text-sm text-blue-600 font-medium block" href="https://www.sdpolymers.in" target="_blank" rel="noreferrer">🌐 www.sdpolymers.in</a>
//             </div>
//           </aside>
//         </div>
//       </motion.section>

//       {/* CERTIFICATIONS */}
//       <section className="bg-white py-16 text-black">
//         <div className="container mx-auto px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-extrabold uppercase tracking-wider">Our Certifications</h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
//             SD Polymers is dedicated to quality and compliance. Our products are manufactured using <strong>RoHS</strong>, <strong>REACH</strong>, and <strong>ISO</strong> certified processes —
//             ensuring safety, sustainability, and global reliability.
//           </p>

//           <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
//             <div className="bg-gray-100 rounded-lg shadow-md p-6 w-40 h-28 flex items-center justify-center">
//               <Image src="/images/rohs.png" alt="RoHS Certification" width={100} height={60} />
//             </div>
//             <div className="bg-gray-100 rounded-lg shadow-md p-6 w-40 h-28 flex items-center justify-center">
//               <Image src="/images/reach.png" alt="REACH Certification" width={100} height={60} />
//             </div>
//             <div className="bg-gray-100 rounded-lg shadow-md p-6 w-40 h-28 flex items-center justify-center">
//               <Image src="/images/iso.png" alt="ISO Certification" width={100} height={60} />
//             </div>
//           </div>

//           <div className="mt-12">
//             <a href="/certifications" className="inline-block border-2 border-black text-black font-semibold px-8 py-3 rounded-lg tracking-wide hover:bg-black hover:text-white transition-all duration-300">
//               Certification
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* CTA & CONTACT FORM */}
//       <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} id="contact" className="bg-black text-white py-12">
//         <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           <div>
//             <h2 className="text-3xl font-bold">Get in touch</h2>
//             <p className="mt-3 text-lg max-w-xl">Want a quote or product samples? Send us your requirements and we’ll respond within one business day.</p>

//             <ul className="mt-6 text-sm space-y-2">
//               <li>📍 Unit 1 - A-67, KH - 147715, Roopnagar Industrial Area, Loni, Ghaziabad - 201102</li>
//               <li>📍 Unit 2 - KH - 761, Bisokhar Road, Bisokhar, Modinagar - 201204</li>
//               <li>📞 +91 98917 58899</li>
//               <li>✉️ contact@sdpolymers.in</li>
//             </ul>
//           </div>

//           <div>
//             <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 text-gray-800 shadow">
//               <h3 className="font-semibold text-lg">Request a Quote</h3>

//               <label className="block mt-4">
//                 <span className="text-sm">Name</span>
//                 <input required className="w-full mt-1 p-2 border rounded" name="name" value={form.name} onChange={handleChange} />
//               </label>

//               <label className="block mt-3">
//                 <span className="text-sm">Email</span>
//                 <input required type="email" className="w-full mt-1 p-2 border rounded" name="email" value={form.email} onChange={handleChange} />
//               </label>

//               <label className="block mt-3">
//                 <span className="text-sm">Message / Requirements</span>
//                 <textarea required className="w-full mt-1 p-2 border rounded h-28" name="message" value={form.message} onChange={handleChange} />
//               </label>

//               <div className="mt-4">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   aria-busy={loading}
//                   className="bg-black text-white px-4 py-2 rounded border border-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-60"
//                 >
//                   {loading ? "Sending..." : "Send Enquiry"}
//                 </button>
//               </div>

//               {status && (
//                 <p className={`mt-3 text-sm ${status.includes("successfully") ? "text-green-600" : "text-red-500"}`}>{status}</p>
//               )}
//             </form>
//           </div>
//         </div>
//       </motion.section>
//     </main>
//   );
// }
'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// ✅ Added new icons
import { Award, Shield, MapPin, Phone, Mail } from "lucide-react";

type FormState = { name: string; email: string; message: string };

export default function AboutPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        const json = await res.json().catch(() => null);
        setStatus(json?.error || "Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("Error sending message. Check your network or server.");
    } finally {
      setLoading(false);
    }
  };

  // Animation variants for staggering
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-background-dark text-text-light">
      {/* HERO - THEMED */}
      <section className="relative bg-background-card text-text-light py-20 overflow-hidden">
        {/* ✅ Added decorative gradient */}
        <div className="absolute -top-1/2 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 to-transparent opacity-50 blur-3xl" />
        <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">SD Polymers</h1>
            <p className="mt-4 text-lg lg:text-xl max-w-2xl text-text-secondary">
              Manufacturer of PVC Granules, Dip-Moulded terminal parts, connectors and wire harness components — trusted quality with{" "}
              <span className="font-semibold text-secondary">ROHS & REACH</span> certified materials.
            </p>

            <motion.dl 
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
            >
              <motion.div variants={itemVariants} className="bg-background-dark/50 p-4 rounded-lg border border-border-color/20">
                <dt className="text-xs uppercase text-text-secondary">Founded</dt>
                <dd className="text-lg font-semibold text-text-light">2021</dd>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-background-dark/50 p-4 rounded-lg border border-border-color/20">
                <dt className="text-xs uppercase text-text-secondary">Founders</dt>
                <dd className="text-lg font-semibold text-text-light">Ravishankar Pandey & Bani Singh Dagur</dd>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-background-dark/50 p-4 rounded-lg border border-border-color/20">
                <dt className="text-xs uppercase text-text-secondary">Locations</dt>
                <dd className="text-lg font-semibold text-text-light">Ghaziabad, Uttar Pradesh</dd>
              </motion.div>
            </motion.dl>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block bg-primary text-text-light font-semibold px-5 py-3 rounded-lg shadow hover:bg-primary-hover transition transform hover:scale-105">
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-80 h-56 lg:w-[520px] lg:h-[320px] rounded-xl overflow-hidden shadow-2xl bg-background-dark/50 border border-border-color/30">
              <Image src="/images/hero.jpg" alt="SD Polymers products" fill style={{ objectFit: "cover" }} priority />
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPANY PROFILE - THEMED */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }} 
        className="container mx-auto px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-secondary">Company Profile</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              SD Polymers is a Ghaziabad-based manufacturer established in <strong>2021</strong> by <strong>Ravishankar Pandey</strong> and <strong>Bani Singh Dagur</strong>.
              We specialize in producing high-quality <strong>PVC granules</strong> and a wide range of electrical components including dip-moulded terminal sleeves, connectors (C110, C90 series),
              fuse holders, silicone braided wires, CAT-5 cables, electrical tapes and more. Our products are built for consistent performance across electrical, automotive and industrial applications —
              and our materials are <strong className="text-secondary">ROHS & REACH</strong> certified.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {/* ✅ Added Icons and enhanced styling */}
              <div className="p-6 bg-background-card rounded-lg shadow-lg border border-border-color/30 transform transition-all duration-300 hover:scale-[1.02] hover:border-primary">
                <Award className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg text-text-light">Infrastructure</h3>
                <p className="text-sm text-text-secondary mt-2">In-house compounding and dip-moulding facilities with QC and packaging lines.</p>
              </div>
              <div className="p-6 bg-background-card rounded-lg shadow-lg border border-border-color/30 transform transition-all duration-300 hover:scale-[1.02] hover:border-primary">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg text-text-light">Quality & Compliance</h3>
                <p className="text-sm text-text-secondary mt-2">ROHS & REACH compliant materials; focus on on-time delivery and consistent performance.</p>
              </div>
            </div>
          </div>

          <aside className="bg-background-card rounded-lg shadow-xl p-6 sticky top-28 border border-border-color/30">
            <h4 className="text-sm uppercase text-secondary tracking-wide">Contact</h4>
            <p className="mt-3 font-medium text-text-light">SD Polymers</p>
            <p className="text-sm text-text-secondary mt-1">Unit 1 - A-67, KH - 147715, Roopnagar Industrial Area, Loni, Ghaziabad - 201102</p>
            <p className="text-sm text-text-secondary mt-1">Unit 2 - KH - 761, Bisokhar Road, Bisokhar, Modinagar - 201204</p>

            <div className="mt-4 space-y-2">
              <a className="text-sm text-primary font-medium flex items-center gap-2" href="tel:+918991758899">
                <Phone className="h-4 w-4" /> +91 98917 58899
              </a>
              <a className="text-sm text-primary font-medium flex items-center gap-2" href="mailto:contact@sdpolymers.in">
                <Mail className="h-4 w-4" /> contact@sdpolymers.in
              </a>
            </div>
          </aside>
        </div>
      </motion.section>

      {/* CERTIFICATIONS - THEMED */}
      <section className="bg-background-card py-16 text-text-light">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-wider text-secondary">Our Certifications</h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
            SD Polymers is dedicated to quality and compliance. Our products are manufactured using <strong className="text-text-light">RoHS</strong>, <strong className="text-text-light">REACH</strong>, and <strong>ISO</strong> certified processes —
            ensuring safety, sustainability, and global reliability.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
            {/* ✅ Kept white bg for logos, added hover effect */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 w-40 h-28 flex items-center justify-center transform transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
            >
              <Image src="/images/rohs.png" alt="RoHS Certification" width={100} height={60} />
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 w-40 h-28 flex items-center justify-center transform transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
            >
              <Image src="/images/reach.png" alt="REACH Certification" width={100} height={60} />
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 w-40 h-28 flex items-center justify-center transform transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
            >
              <Image src="/images/iso.png" alt="ISO Certification" width={100} height={60} />
            </motion.div>
          </div>

          <div className="mt-12">
            <a href="/certifications" className="inline-block border-2 border-primary text-primary font-semibold px-8 py-3 rounded-lg tracking-wide hover:bg-primary hover:text-text-light transition-all duration-300 transform hover:scale-105">
              Certification
            </a>
          </div>
        </div>
      </section>

      {/* CTA & CONTACT FORM - THEMED */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }} 
        id="contact" 
        className="bg-background-dark text-text-light py-16"
      >
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary">Get in touch</h2>
            <p className="mt-3 text-lg max-w-xl text-text-secondary">Want a quote or product samples? Send us your requirements and we’ll respond within one business day.</p>

            {/* ✅ Added icons to contact list */}
            <ul className="mt-6 text-sm space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                <span>Unit 1 - A-67, KH - 147715, Roopnagar Industrial Area, Loni, Ghaziabad - 201102</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                <span>Unit 2 - KH - 761, Bisokhar Road, Bisokhar, Modinagar - 201204</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                <span>+91 98917 58899</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                <span>contact@sdpolymers.in</span>
              </li>
            </ul>
          </div>

          <div>
            {/* ✅ THEMED: Form is now dark theme */}
            <form onSubmit={handleSubmit} className="bg-background-card rounded-lg p-6 shadow-xl border border-border-color/30">
              <h3 className="font-semibold text-lg text-text-light">Request a Quote</h3>

              <label className="block mt-4">
                <span className="text-sm text-text-secondary">Name</span>
                <input 
                  required 
                  className="w-full mt-1 p-2 bg-background-dark border border-border-color/50 rounded text-text-light focus:border-primary focus:ring-primary" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                />
              </label>

              <label className="block mt-3">
                <span className="text-sm text-text-secondary">Email</span>
                <input 
                  required 
                  type="email" 
                  className="w-full mt-1 p-2 bg-background-dark border border-border-color/50 rounded text-text-light focus:border-primary focus:ring-primary" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                />
              </label>

              <label className="block mt-3">
                <span className="text-sm text-text-secondary">Message / Requirements</span>
                <textarea 
                  required 
                  className="w-full mt-1 p-2 bg-background-dark border border-border-color/50 rounded h-28 text-text-light focus:border-primary focus:ring-primary" 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                />
              </label>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="bg-primary text-text-light px-4 py-2 rounded border border-primary hover:bg-primary-hover transition-all duration-300 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </div>

              {status && (
                <p className={`mt-3 text-sm ${status.includes("successfully") ? "text-green-400" : "text-red-400"}`}>{status}</p>
              )}
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
}