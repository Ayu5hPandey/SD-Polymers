// app/about/page.tsx
import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "About Us — SD Polymers",
  description: "SD Polymers — Manufacturer of PVC granules, dip-moulded terminal sleeves, connectors and wiring products. ROHS & REACH certified solutions."
};

export default function AboutPage() {
  return (
    <main>
      {/* ... all your static content (hero, products, markets) stays here ... */}

      {/* Contact form section */}
      <section id="contact" className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="mt-3 text-lg">Want a quote or product samples? Send us your requirements and we’ll respond within one business day.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
