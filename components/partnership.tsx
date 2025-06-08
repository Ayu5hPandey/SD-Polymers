import React from "react";

const PartnersSection = () => {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          We Work With the <br className="hidden md:block" /> Best Partners
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          While we are at the forefront of and specialize in design-build, we are very familiar with a number of delivery methods and are confident we can find the process that will best help you meet your goals.
        </p>
        <button className="border border-black text-black px-6 py-2 font-medium transition duration-300 hover:bg-black hover:text-white">
          READ MORE
        </button>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          <img src="/logos/jamie-annie.png" alt="Jamie & Annie Studio" className="mx-auto max-h-12 object-contain" />
          <img src="/logos/alisa-institute.png" alt="Alisa Institute" className="mx-auto max-h-12 object-contain" />
          <img src="/logos/new-wave.png" alt="New Wave" className="mx-auto max-h-12 object-contain" />
          <img src="/logos/organic-roadsigns.png" alt="Organic Roadsigns" className="mx-auto max-h-12 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;