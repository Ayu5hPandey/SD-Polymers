// pages/markets.tsx
'use client';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';

interface MarketItem {
  title: string;
  description: string;
  image: string;
}

const markets: MarketItem[] = [
  {
    title: 'Poly Vinyl Chloride',
    image: '/adhesives.jpg',
    description: 'Advanced bonding solutions for industrial strength.',
  },
  {
    title: 'Appliances',
    description: 'Making lives more effective, one appliance at a time.',
    image: '/appliances.jpg',
  },
  {
    title: 'Automotive',
    image: '/automotive.jpg',
    description: 'Driving innovation with durable polymers.',
  },
  {
    title: 'Compounding',
    image: '/compounding.jpg',
    description: 'Customized material blending for performance.',
  },
  {
    title: 'Electronics',
    image: '/electronics.jpg',
    description: 'Precision materials for high-tech components.',
  },
];

const Markets: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Our Markets</h1>
        <p className="text-base md:text-lg mb-6 md:mb-8">
          No matter how diverse your application or market, we can provide you with materials that meet your specifications.
        </p>

        <button className="border px-6 py-2 text-white border-yellow-400 hover:bg-yellow-500 transition mb-6 md:mb-8">
          VIEW ALL
        </button>

        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {markets.map((market, idx) => {
            const isActive = isMobile ? activeIndex === idx : false;

            return (
                <div
                key={idx}
                onClick={() => handleClick(idx)}
                className="relative group min-w-[220px] md:min-w-[250px] max-w-[250px] h-[340px] md:h-[350px] border border-white/20 rounded overflow-hidden hover:border-yellow-500 transition cursor-pointer"
              >
                <div className="relative w-full h-full"> {/* 👈 Add this wrapper */}
                  <Image
                    src={market.image}
                    alt={market.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80"
                  />
                </div>
                {/* Overlay Tile */}
                <div
                  className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent transform transition-all duration-300
                  ${isMobile
                      ? isActive
                        ? 'translate-y-0'
                        : 'translate-y-16'
                      : 'translate-y-16 group-hover:translate-y-0'
                    }`}
                >
                  <h2 className="text-xl font-bold">{market.title}</h2>
                  <p
                    className={`text-sm mt-1 transition-opacity duration-300
                    ${isMobile
                        ? isActive
                          ? 'opacity-100'
                          : 'opacity-0'
                        : 'opacity-0 group-hover:opacity-100'
                      }`}
                  >
                    {market.description}
                  </p>
                  <a
                    href="#"
                    className={`text-yellow-400 text-sm mt-2 inline-block transition-opacity duration-300
                    ${isMobile
                        ? isActive
                          ? 'opacity-100'
                          : 'opacity-0'
                        : 'opacity-0 group-hover:opacity-100'
                      }`}
                  >
                    LEARN MORE →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Markets;
