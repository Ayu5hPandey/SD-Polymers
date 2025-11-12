// components/our market/data/market.ts
// ✅ This file centralizes all your market data

export interface MarketItem {
    slug: string; // Used for the URL
    title: string;
    description: string;
    image: string;
    // Detailed content for the dynamic [slug] page
    detailedInfo: {
      overview: string;
      applications: string[];
      relevantProducts: string[];
    };
  }
  
  export const markets: MarketItem[] = [
      {
        slug: 'electrical-and-electronics',
        title: 'Electrical & Electronics',
        image: '/electrical.webp',
        description: 'Supplying insulated wires, connectors, and protective solutions for safe, reliable electrical installations.',
        detailedInfo: {
          overview: 'In the Electrical & Electronics sector, reliability is non-negotiable. S.D. Polymers delivers high-performance polymer compounds, including specialized P.V.C. Granules, that provide superior dielectric strength, flame retardancy, and thermal stability. Our materials ensure the safety and longevity of components, from simple wire insulation to complex connector housings.',
          applications: [
            'Wire Harness Connectors & Housings',
            'Cable Insulation & Jacketing',
            'Switchgear Components',
            'Protective Sleeving and Tubing',
            'Enclosures for Sensitive Electronics',
          ],
          relevantProducts: [
            'Flame-Retardant P.V.C. Compounds',
            'High-Temperature Resistant Granules',
            'Custom Dielectric Polymer Blends',
            'Specialty Compounds for Connectors',
          ],
        },
      },
      {
        slug: 'automotive-and-transportation',
        title: 'Automotive & Transportation',
        image: '/transport.png',
        description: 'Providing durable connectors and harness assemblies designed for vehicle wiring and power distribution.',
        detailedInfo: {
          overview: 'The automotive industry demands materials that withstand extreme conditions, including vibration, temperature fluctuations, and exposure to chemicals. S.D. Polymers is a key partner in this sector, providing robust polymer solutions for critical components like wire harness connectors. Our materials contribute to vehicle safety, reliability, and lightweighting goals.',
          applications: [
            'Automotive Wire Harness Connectors',
            'ECU (Engine Control Unit) Housings',
            'Sensor and Switch Components',
            'Battery Pack Casings and Connectors',
            'Interior and Exterior Cable Management',
          ],
          relevantProducts: [
            'P.V.C. Granules for Automotive Wiring',
            'Vibration-Dampening Polymer Blends',
            'Chemical & Heat Resistant Compounds',
            'Electrical Connectors',
          ],
        },
      },
      {
        slug: 'industrial-machinery-and-automation',
        title: 'Industrial Machinery & Automation',
        image: '/machine.png',
        description: 'Delivering precision wiring, sleeves, and connectors for efficient industrial control and automation systems.',
        detailedInfo: {
          overview: 'Modern industrial automation relies on precision and durability. Our polymer compounds are engineered to protect and insulate the complex wiring and control systems that power factory floors. From robotic arms to control panels, S.D. Polymers provides materials that resist oil, abrasion, and flexing, ensuring maximum uptime and operational safety.',
          applications: [
            'Industrial Control System Connectors',
            'Robotic Arm Wiring & Tubing',
            'Conveyor Belt System Components',
            'Machine Tool Wiring Insulation',
            'Heavy-Duty Equipment Harnesses',
          ],
          relevantProducts: [
            'Oil-Resistant P.V.C. Compounds',
            'High-Flexibility Granules',
            'Abrasion-Resistant Polymer Blends',
            'Custom Materials for Industrial Use',
          ],
        },
      },
      {
        slug: 'telecom-and-networking',
        title: 'Telecom & Networking',
        image: '/communication.png',
        description: 'Offering high-quality cables and accessories for seamless data, voice, and signal transmission.',
        detailedInfo: {
          overview: 'In an interconnected world, signal integrity is paramount. S.D. Polymers provides advanced polymer compounds for the telecom and networking industry, ensuring data is transmitted clearly and reliably. Our materials are used in everything from data center cables to premise wiring, offering excellent electrical properties and adherence to strict industry standards.',
          applications: [
            'Data Cable Insulation (e.g., Cat 5/6)',
            'Fiber Optic Cable Sheathing',
            'Networking Connectors and Jacks',
            'Patch Panel Components',
            'Data Center Wire Management',
          ],
          relevantProducts: [
            'Low-Smoke Zero-Halogen (LSZH) Compounds',
            'Specialty P.V.C. for Data Transmission',
            'High-Speed Data Cable Compounds',
          ],
        },
      },
      {
        slug: 'appliance-and-consumer-goods',
        title: 'Appliance & Consumer Goods',
        image: '/appliance.jpg',
        description: 'Equipping appliances with compact, reliable wiring harnesses and insulation components for enhanced performance.',
        detailedInfo: {
          overview: 'From kitchen appliances to power tools, consumer goods require safe, reliable, and cost-effective components. S.D. Polymers supplies custom-formulated P.V.C. granules and polymer compounds for internal wiring harnesses, power cords, and connector housings. Our materials meet global safety standards (like RoHS and REACH) while providing excellent processability for high-volume manufacturing.',
          applications: [
            'Internal Wiring Harnesses for Appliances',
            'Power Cord Insulation and Plugs',
            'Connector Blocks and Terminals',
            'Control Knobs and Housings',
            'Flexible Tubing for Fluid/Air',
          ],
          relevantProducts: [
            'RoHS/REACH Compliant P.V.C. Granules',
            'Heat-Resistant Compounds',
            'Custom-Color Polymer Blends',
            'Flexible P.V.C. for Gaskets and Seals',
          ],
        },
      },
  ];