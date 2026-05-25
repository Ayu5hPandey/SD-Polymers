// /*
//  * =================================================================
//  * 1. YOUR TYPES
//  * =================================================================
//  */
// export interface ProductVariantSpec {
//   [key: string]: string;
// }

// export interface ProductVariant {
//   name: string;
//   description: string;
//   image: string; // Make sure these images are in your /public/variants/ folder
//   specs: ProductVariantSpec;
// }

// export interface Product {
//   slug: string; // This will be the URL (e.g., "pvc-granules")
//   title: string;
//   description: string;
//   variants: ProductVariant[];
// }

// /*
//  * =================================================================
//  * 2. YOUR DATA
//  * =================================================================
//  */
// export const products: Product[] = [
//   // --- PRODUCT 1 ---
//   {
//     slug: "wire-harness-connectors",
//     title: "WIRE HARNESS CONNECTORS",
//     description: "Next-generation polymer and connector solutions for automotive and industrial applications.",
//     variants: [
//       {
//         name: "SDP-001",
//         description: "Compact 2-pole PF connector from the C110 series for reliable low-current automotive connections.",
//         image: "/variants/SDP-001.jpg",
//         specs: { "Part Name": "C110 srs 2 PF-NY6 (N)" }
//       },
//       {
//         name: "SDP-002",
//         description: "3-pole PF connector (C110 series) designed for secure harness connections and vibration resistance.",
//         image: "/variants/SDP-002.jpg",
//         specs: { "Part Name": "C110 srs 3 PF-NY6 (N)" }
//       },
//       {
//         name: "SDP-003",
//         description: "4-pole PF connector in the C110 family, suited for multi-circuit signal or power lines.",
//         image: "/variants/SDP-003.jpg",
//         specs: { "Part Name": "C110 srs 4 PF-NY6 (N)" }
//       },
//        {
//           name: "SDP-004",
//           description: "6-pole PF connector offering compact multi-pin connectivity for automotive modules.",
//           image: "/variants/SDP-004.jpg",
//           specs: { "Part Name": "C110 srs 6 PF-NY6 (N)" }
//         },
//               {
//                 name: "SDP-005",
//                 description: "6-pole PM connector from C110 series with improved pin retention for heavy duty wiring.",
//                 image: "/variants/SDP-005.jpg",
//                 specs: { "Part Name": "C110 srs 6 PM-NY6 (N)" }
//               },
//               {
//                 name: "SDP-006",
//                 description: "3-pole PM connector variant for secure mating in compact harness assemblies.",
//                 image: "/variants/SDP-006.jpg",
//                 specs: { "Part Name": "C110 srs 3 PM-NY6 (N)" }
//               },
//               {
//                 name: "SDP-007",
//                 description: "4-pole PM connector built for vibration resistance and long service life in vehicles.",
//                 image: "/variants/SDP-007.jpg",
//                 specs: { "Part Name": "C110 srs 4 PM-NY6 (N)" }
//               },
//               {
//                 name: "SDP-008",
//                 description: "2-pole PM connector — a small form factor option for two-wire circuits.",
//                 image: "/variants/SDP-008.jpg",
//                 specs: { "Part Name": "C110 srs 2 PM-NY6 (N)" }
//               },
//               {
//                 name: "SDP-009",
//                 description: "C90 series 2-pin PM connector with weather-proofing (WP) for exterior applications.",
//                 image: "/variants/SDP-009.jpg",
//                 specs: { "Part Name": "C90-2PM-N-WP" }
//               },
//               {
//                 name: "SDP-010",
//                 description: "C90 series 2-pin PF connector with waterproofing — suitable for sensors and exterior harnesses.",
//                 image: "/variants/SDP-010.jpg",
//                 specs: { "Part Name": "C90-2PF-N-WP" }
//               },
//               {
//                 name: "SDP-011",
//                 description: "3-pin PM connector from the C90 family with waterproof sealing for durable outdoor use.",
//                 image: "/variants/SDP-011.jpg",
//                 specs: { "Part Name": "C90-3PM-N-WP" }
//               },
//               {
//                 name: "SDP-012",
//                 description: "3-pin PF waterproof connector (C90) optimized for signal integrity in harsh environments.",
//                 image: "/variants/SDP-012.jpg",
//                 specs: { "Part Name": "C90-3PF-N-WP" }
//               },
//               {
//                 name: "SDP-013",
//                 description: "6-pole PM waterproof connector with flange (FLW) for secure panel or chassis mounting.",
//                 image: "/variants/SDP-013.jpg",
//                 specs: { "Part Name": "C90-6PM-N-WP-FLW" }
//               },
//               {
//                 name: "SDP-014",
//                 description: "6-pole PF waterproof connector (NF variant) featuring robust locking for heavy harnesses.",
//                 image: "/variants/SDP-014.jpg",
//                 specs: { "Part Name": "C90-6PF-N-WP (NF)" }
//               },
//               {
//                 name: "SDP-015",
//                 description: "4-pole PM waterproof connector for multi-circuit exterior connections.",
//                 image: "/variants/SDP-015.jpg",
//                 specs: { "Part Name": "C90-4PM-N-WP" }
//               },
//               {
//                 name: "SDP-016",
//                 description: "Headlamp connector assembly with cover coupler — designed for headlamp module connections.",
//                 image: "/variants/SDP-016.jpg",
//                 specs: { "Part Name": "HEAD LAMP WITH COVER CUPLER" }
//               },
//               {
//                 name: "SDP-017",
//                 description: "Headlamp connector without cover coupler — a slim mating connector for lighting harnesses.",
//                 image: "/variants/SDP-017.jpg",
//                 specs: { "Part Name": "HEAD LAMP W/O COVER CUPLER" }
//               },
//               {
//                 name: "SDP-018",
//                 description: "Single fuse base connector for inline fuse mounting and easy replacement.",
//                 image: "/variants/SDP-018.jpg",
//                 specs: { "Part Name": "1 FUSE BASE CONNECTOR" }
//               },
//               {
//                 name: "SDP-019",
//                 description: "Single fuse base connector offering secure fuse retention in compact housings.",
//                 image: "/variants/SDP-019.jpg",
//                 specs: { "Part Name": "SINGLE FUSE BASE CONNECTOR" }
//               },
//               {
//                 name: "SDP-020",
//                 description: "2+2 fuse connector providing two pairs of fused circuits in a compact assembly.",
//                 image: "/variants/SDP-020.jpg",
//                 specs: { "Part Name": "FUSE CONNECTOR (2+2)" }
//               },
//               {
//                 name: "SDP-021",
//                 description: "1+1 fuse connector designed for dual single-circuit protection in a small footprint.",
//                 image: "/variants/SDP-021.jpg",
//                 specs: { "Part Name": "FUSE CONNECTOR (1+1)" }
//               },
//               {
//                 name: "SDP-022",
//                 description: "Single pole mini fuse connector that accepts mini blade fuses for compact protection.",
//                 image: "/variants/SDP-022.jpg",
//                 specs: { "Part Name": "SINGLE POLE MINI FUSE CONNECTOR" }
//               },
//               {
//                 name: "SDP-023",
//                 description: "Single glass fuse cover to protect in-line glass fuses from debris and moisture.",
//                 image: "/variants/SDP-023.jpg",
//                 specs: { "Part Name": "SINGLE GLASS FUSE COVER" }
//               },
//               {
//                 name: "SDP-024",
//                 description: "Double glass fuse cover that houses two glass fuses side-by-side for dual protection.",
//                 image: "/variants/SDP-024.jpg",
//                 specs: { "Part Name": "DOUBLE GLASS FUSE COVER" }
//               },
//               {
//                 name: "SDP-025",
//                 description: "Alternative single glass fuse cover variant — protective housing for glass fuses.",
//                 image: "/variants/SDP-025.jpg",
//                 specs: { "Part Name": "SINGLE GLASS FUSE COVER" }
//               },
//               {
//                 name: "SDP-026",
//                 description: "6-pole fuse base with attached cover — ready-to-install multi-fuse assembly for panels.",
//                 image: "/variants/SDP-026.jpg",
//                 specs: { "Part Name": "6 POLE FUSE BASE WITH ATTACHED COVER" }
//               },
//               {
//                 name: "SDP-027",
//                 description: "6-pole fuse base providing multiple fuse slots for circuit protection and modular wiring.",
//                 image: "/variants/SDP-027.jpg",
//                 specs: { "Part Name": "6 POLE FUSE BASE" }
//               },
//               {
//                 name: "SDP-028",
//                 description: "6-pole fuse cover — replacement cover for 6-pole fuse bases to keep fuses secure.",
//                 image: "/variants/SDP-028.jpg",
//                 specs: { "Part Name": "6 POLE FUSE COVER" }
//               },
//               {
//                 name: "SDP-029",
//                 description: "14-pole fuse base designed for larger fuse panels, enabling multiple circuit protections.",
//                 image: "/variants/SDP-029.jpg",
//                 specs: { "Part Name": "14 POLE FUSE BASE" }
//               },
//               {
//                 name: "SDP-030",
//                 description: "14-pole fuse cover — protective cap for 14-slot fuse bases used in complex harnesses.",
//                 image: "/variants/SDP-030.jpg",
//                 specs: { "Part Name": "14 POLE FUSE COVER" }
//               },
//               {
//                 name: "SDP-031",
//                 description: "8-pole female connector suitable for multi-wire female terminations in control modules.",
//                 image: "/variants/SDP-031.jpg",
//                 specs: { "Part Name": "8 POLE FEMALE CONNECTOR" }
//               },
//               {
//                 name: "SDP-032",
//                 description: "250 series 6-pole female connector offering standardized pin spacing and easy mating.",
//                 image: "/variants/SDP-032.jpg",
//                 specs: { "Part Name": "250 SRS 6 POLE FEMALE CONNECTOR" }
//               },
//               {
//                 name: "SDP-033",
//                 description: "2-pole maxi fuse base for high-current protections using maxi blade fuses.",
//                 image: "/variants/SDP-033.jpg",
//                 specs: { "Part Name": "2 POLE MAXI FUSE BASE" }
//               },
//               {
//                 name: "SDP-034",
//                 description: "Speedometer assembly — vehicle speed instrument module for dashboard integration.",
//                 image: "/variants/SDP-034.jpg",
//                 specs: { "Part Name": "SPEEDO METER" }
//               },
//               {
//                 name: "SDP-035",
//                 description: "Brown speedometer variant — color-matched instrument for specific vehicle trims.",
//                 image: "/variants/SDP-035.jpg",
//                 specs: { "Part Name": "BROWN SPEEDO METER" }
//               },
//               {
//                 name: "SDP-036",
//                 description: "Fog lamp connector designed for robust exterior lighting connections and moisture resistance.",
//                 image: "/variants/SDP-036.jpg",
//                 specs: { "Part Name": "FOG LAMP CONNECTOR" }
//               },
//               {
//                 name: "SDP-037",
//                 description: "12-pole hybrid connector — high-density multi-function connector for complex systems.",
//                 image: "/variants/SDP-037.jpg",
//                 specs: { "Part Name": "12 POLE HYBRID CONNECTOR" }
//               },
//               {
//                 name: "SDP-038",
//                 description: "Single-pole Vespa connector — small form factor connector typical to scooter wiring.",
//                 image: "/variants/SDP-038.jpg",
//                 specs: { "Part Name": "1 POLE VESPA CONNECTOR" }
//               },
//               {
//                 name: "SDP-039",
//                 description: "Single-pole positive-lock connector (FMC) that secures the positive power lead reliably.",
//                 image: "/variants/SDP-039.jpg",
//                 specs: { "Part Name": "1 POLE POSITIVE LOCK CONNECTOR (FMC)" }
//               },
//               {
//                 name: "SDP-040",
//                 description: "Cover LPT 3118 TC-D1 — protective housing component for connector/panel openings.",
//                 image: "/variants/SDP-040.jpg",
//                 specs: { "Part Name": "COVER LPT 3118 TC-D1" }
//               },
//               {
//                 name: "SDP-041",
//                 description: "T-cover — snap on protective cap used to shield connector pins or openings.",
//                 image: "/variants/SDP-041.jpg",
//                 specs: { "Part Name": "T-COVER" }
//               },
//               {
//                 name: "SDP-042",
//                 description: "Bracket component used to mount or secure connectors and related hardware.",
//                 image: "/variants/SDP-042.jpg",
//                 specs: { "Part Name": "BRACKET" }
//               },
//               {
//                 name: "SDP-043",
//                 description: "General mounting or spacer component (unspecified in PDF).",
//                 image: "/variants/SDP-043.jpg",
//                 specs: { "Part Name": "2.88" }
//               },
//               {
//                 name: "SDP-044",
//                 description: "PVC protective cap for terminal ends to prevent shorting and ingress of contaminants.",
//                 image: "/variants/SDP-044.jpg",
//                 specs: { "Part Name": "PVC CAP KMCL" }
//               },
//               {
//                 name: "SDP-045",
//                 description: "KWA600 red protective cap — color-coded cap for easy identification of circuits.",
//                 image: "/variants/SDP-045.jpg",
//                 specs: { "Part Name": "KWA600 RED CAP" }
//               },
//               {
//                 name: "SDP-046",
//                 description: "Alternate boot cap to protect alternator or cable boots from wear and moisture.",
//                 image: "/variants/SDP-046.jpg",
//                 specs: { "Part Name": "ALT BOOT CAP" }
//               },
//               {
//                 name: "SDP-047",
//                 description: "EPDM rubber grommet — flexible sealing grommet for wiring passing through panels.",
//                 image: "/variants/SDP-047.jpg",
//                 specs: { "Part Name": "EPDM RUBBER GROMMET" }
//               },
//               {
//                 name: "SDP-048",
//                 description: "General grommet used to protect wiring and reduce abrasion at entry points.",
//                 image: "/variants/SDP-048.jpg",
//                 specs: { "Part Name": "GROMMET" }
//               },
//               {
//                 name: "SDP-049",
//                 description: "Small accessory part (unspecified) likely used as spacer or terminal protection.",
//                 image: "/variants/SDP-049.jpg",
//                 specs: { "Part Name": "2.30" }
//               },
//               {
//                 name: "SDP-050",
//                 description: "Replacement grommet — commonly used for cable protection and sealing in assemblies.",
//                 image: "/variants/SDP-050.jpg",
//                 specs: { "Part Name": "GROMMET" }
//               },
//               {
//                 name: "SDP-051",
//                 description: "Bullet cap (green) — insulated end cap for bullet terminals providing protection and color coding.",
//                 image: "/variants/SDP-051.jpg",
//                 specs: { "Part Name": "BULLET CAP (GREEN CAP)" }
//               },
//       {
//         name: "SDP-052",
//         description: "Bullet cap (green) — duplicate listing; small insulated terminal cap for wire ends.",
//         image: "/variants/SDP-052.jpg",
//         specs: { "Part Name": "BULLET CAP (GREEN CAP)" }
//       }
//     ]
//   },

//   // --- PRODUCT 2 ---
//   {
//     slug: "cat-5-cable",
//     title: "CAT 5 Cable",
//     description: "High-performance networking cables ensuring reliable data transmission.",
//     variants: [
//       {
//         name: "CAT5 Standard",
//         description: "Standard-grade networking cable suitable for small office or home setups.",
//         image: "/variants/cat5-standard.jpg",
//         specs: {
//           Length: "100m",
//           Material: "Copper",
//           Speed: "100 Mbps"
//         }
//       },
//       {
//         name: "CAT5 Enhanced",
//         description: "Enhanced CAT5 cable with improved shielding for longer and more stable connections.",
//         image: "/variants/cat5-enhanced.jpg",
//         specs: {
//           Length: "150m",
//           Material: "Copper + Shielding",
//           Speed: "100 Mbps"
//         }
//       }
//     ]
//   },
//   // --- ADD MORE PRODUCTS HERE ---
// ];
/*
/*
 * =================================================================
 * 1. YOUR TYPES (FINAL)
 * =================================================================
 */
/*
 * =================================================================
 * 1. YOUR TYPES (FINAL)
 * =================================================================
 */
export interface ProductVariantSpec {
  [key: string]: string;
}

// Raw variant data (image is optional)
export interface RawProductVariant {
  name: string;
  description: string;
  image?: string; // Image is optional. If missing, a placeholder will be used.
  specs: ProductVariantSpec;
}

// Final variant data (image is required, will be a placeholder if not provided)
export interface ProductVariant extends RawProductVariant {
  image: string; 
}

// Raw product category data
export interface RawProduct {
  slug: string;
  title: string;
  description: string;       // This is the short description for the header
  categoryImage: string;
  details: string;           // This is the long "General Information" for the bottom
  variants: RawProductVariant[];
}

// Final product category data
export interface Product extends RawProduct {
  variants: ProductVariant[];
}

/*
 * =================================================================
 * 2. HELPER FUNCTION (Generates placeholder images)
 * =================================================================
 */
const placeholder = (text: string) => {
  const encodedText = encodeURIComponent(text);
  // Using dark colors for a professional look
  return `https://placehold.co/600x400/333333/777777?text=${encodedText}`;
};


/*
 * =================================================================
 * 3. YOUR RAW PRODUCT DATA (THE "DATABASE")
 * =================================================================
 */
const rawProducts: RawProduct[] = [

  // --- 2. P.V.C GRANULES ---
  {
    slug: "pvc-granules",
    title: "P.V.C Granules",
    description: "RoHS and REACH certified PVC granules for wires, cables, automotive parts, and more.",
    categoryImage: "/pvc-granules.avif",  // Add to /public/images/
    details: `
Use Case:
Used in the manufacturing of wires, cables, automotive parts, pipes, and consumer electrical products.

Variants:
Available in soft and rigid grades, customized for flame-retardant (FR), UV-resistant, or high-flexibility applications. Offered in various colors and hardness levels. All types are available with ROHS and REACH certifications.
    `,
    variants: [
      {
        name: "REACH Compliant PVC Granules",
        image: "/pvc-variant-1.webp",
        description: "Formulated to meet strict European REACH standards for environmental and health safety.",
        specs: {
          "Compliance": "REACH",
          "Temp. Rating": "70°C - 105°C (Standard)",
          "Density": "1.30 - 1.55 g/cm³ (Standard)",
          "Elongation": "150% - 250% (Standard)",
          "Hardness (Shore A)": "60-95 (Standard)"
        }
      },
      {
        name: "RoHS Compliant PVC Granules",
        image: "/pvc-variant-2.webp.avif",
        description: "Certified free of hazardous substances as per RoHS directives.",
        specs: {
          "Compliance": "RoHS",
          "Temp. Rating": "70°C - 105°C (Standard)",
          "Density": "1.30 - 1.55 g/cm³ (Standard)",
          "Elongation": "150% - 250% (Standard)",
          "Hardness (Shore A)": "60-95 (Standard)"
        }
      },
      {
        name: "FR (Flame Retardant) PVC Granules",
        image: "/pvc-variant-3.png",
        description: "Specialized flame-retardant compound for applications requiring high fire safety.",
        specs: {
          "Compliance": "FR, RoHS",
          "Temp. Rating": "70°C - 105°C (Standard)",
          "Density": "1.35 - 1.60 g/cm³ (Standard)",
          "Elongation": "130% - 220% (Standard)",
          "Hardness (Shore A)": "70-95 (Standard)"
        }
      },
      {
        name: "PVC Masterbatch",
        image: "/pvc-variant-4.png",
        description: "High-concentration color and additive pellets for coloring and modifying PVC products.",
        specs: {
          "Type": "Masterbatch",
          "Base Polymer": "PVC",
          "Colors": "All standard colors available",
          "Carrier": "PVC Resin"
        }
      }
    ]
  },

  // --- 3. TERMINAL PVC SLEEVES ---
  {
    slug: "terminal-pvc-sleeves",
    title: "Terminal PVC Sleeves",
    description: "Dip-moulded insulation covers for terminal wire ends in automotive and appliance wiring.",
    categoryImage: "/terminal.jpeg.webp", // Add to /public/images/
    details: `
Use Case:
Provides insulation and a secure fit to terminal wire ends in automotive, industrial, and appliance wiring.

Certifications:
Available in ROHS, REACH, and FR (Flame Retardant) certified variants.

Variants:
We offer a wide range of types, including Flag Caps, Straight Caps, Battery Covers, and Dip Covers for various connector sizes (e.g., 4.8mm, 6.4mm).
    `,
    variants: [
      {
        name: "P.V.C terminal Sleeves",
        image: "/terminal-varient-1.0.png",
        description: "Flexible PVC covers designed to electrically insulate and protect various wire terminals and connectors.",
        specs: {
          "Compliance": "REACH",
          "Temp. Rating": "70°C - 105°C (Standard)",
          "Density": "1.30 - 1.55 g/cm³ (Standard)",
          "Elongation": "150% - 250% (Standard)",
          "Hardness (Shore A)": "60-95 (Standard)"
        }
      },
    ]
  },

  // --- 4. CABLE TIES ---
  {
    slug: "cable-ties",
    title: "Cable Ties",
    description: "RoHS certified cable ties for bundling, securing, and organizing.",
    categoryImage: "/Cable Tie.png", // Add to /public/images/
    details: `
Use Case:
Used to bundle wires in electronics, secure components in vehicles, organize tools, and for general-purpose fastening.

Dimensions and Colours:
Available in Black and White.
Currently offered in 1000m spools (for continuous applications).
    `,
    variants: [
      {
        name: "Cable Tie Spool (Black)",
        image: "/cable-tie-varient-1.png",
        description: "Continuous 1000m spool of black cable tie material, RoHS certified.",
        specs: {
          "Color": "Black",
          "Length": "1000m Spool",
          "Compliance": "RoHS Certified"
        }
      },
      {
        name: "Cable Tie Spool (White)",
        image: "/cable-tie-varient-2.png",
        description: "Continuous 1000m spool of white cable tie material, RoHS certified.",
        specs: {
          "Color": "White",
          "Length": "1000m Spool",
          "Compliance": "RoHS Certified"
        }
      }
    ]
  },

  // --- 5. SILICONE BRAIDED WIRE ---
  {
    slug: "silicone-braided-wire",
    title: "Silicone Braided Wire",
    description: "High-temperature wire with braided fiberglass for appliances, lighting, and industrial machinery.",
    categoryImage: "/silicon-fibre.png", // Add to /public/images/
    details: `
Use Case:
Used in high-temperature environments such as appliances, lighting systems, industrial machinery, and automotive wiring.

Variants:
Available with (Fibre) and without (Non-Fibre) braided fiberglass jackets.
Offered in multiple colors (Red, Black, White, Blue, etc.), temperature ratings, and sizes.
    `,
    variants: [
      {
        name: "Fibre-Glass Braided Silicone Wire",
        image: "/fibre-wire-varient-1.png",
        description: "Silicone wire with a braided fiberglass jacket for extra durability and high-temp resistance.",
        specs: {
          "Type": "Braided (Fibre)",
          "Temp. Rating": "up to 150°C (Standard)",
          "Voltage Rating": "300V / 600V (Standard)",
          "Elongation": "100-300% (Standard)",
          "Hardness (Shore A)": "50-80 (Standard)",
          "Density": "1.2 g/cm³ (Standard)"
        }
      },
      {
        name: "Non-Braided Silicone Wire",
        image: "/fibre-wire-varient-2.png",
        description: "Flexible non-braided silicone wire for general high-temp applications.",
        specs: {
          "Type": "Non-Braided (Non-Fibre)",
          "Temp. Rating": "up to 150°C (Standard)",
          "Voltage Rating": "300V / 600V (Standard)",
          "Elongation": "100-300% (Standard)",
          "Hardness (Shore A)": "50-80 (Standard)",
          "Density": "1.2 g/cm³ (Standard)"
        }
      }
    ]
  },

  // --- 6. CAT 5 CABLE ---
  {
    slug: "cat-5-cable",
    title: "CAT 5 Cable",
    description: "RoHS/REACH certified cable for Ethernet networking, telephone, and data transmission.",
    categoryImage: "/cat-5.png", // Add to /public/images/
    details: `
Use Case:
Used for Ethernet networking, telephone wiring, and data transmission in residential, commercial, and industrial setups.

Variants:
Available in UTP (Unshielded) and STP (Shielded) types, solid or stranded cores, and in multiple colors and lengths.
    `,
    variants: [
      {
        name: "CAT 5 Cable (UTP, Blue)",
        image: "/cat-varient-1.png",
        description: "Unshielded Twisted Pair (UTP) CAT 5 cable in blue.",
        specs: {
          "Type": "UTP",
          "Color": "Blue",
          "Compliance": "RoHS/REACH Certified"
        }
      },
      {
        name: "CAT 5 Cable (UTP, Grey)",
        image: "/cat-varient-2..png",
        description: "Unshielded Twisted Pair (UTP) CAT 5 cable in grey.",
        specs: {
          "Type": "UTP",
          "Color": "Grey",
          "Compliance": "RoHS/REACH Certified"
        }
      },
      {
        name: "CAT 5 Cable (STP, Grey)",
        image: "/cat-varient-3.png",
        description: "Shielded Twisted Pair (STP) CAT 5 cable in grey for high-interference environments.",
        specs: {
          "Type": "STP (Shielded)",
          "Color": "Grey",
          "Compliance": "RoHS/REACH Certified"
        }
      }
    ]
  },

  // --- 7. PVC ELECTRICAL TAPE ---
  {
    slug: "pvc-electrical-tape",
    title: "PVC Electrical Tape",
    description: "REACH and FR certified PVC tape for automobile wire harness and electrical applications.",
    categoryImage: "/tape.png", // Add to /public/images/
    details: `
Use Case:
Used in automobile wire harness and various electrical applications.

Dimensions and Colours:
Available in:
- 10mm x 25m
- 12mm x 25m
- 19mm x 25m

Colors: Black, White, Grey, Orange, Blue, Green, and Yellow.
All tapes are REACH and FR (Flame Retardant) Certified.
    `,
    variants: [
      {
        name: "PVC Tape (Black, White, Yellow, Blue, 19mm x 25m)",
        image: "/tape-varient-1.png",
        description: "PVC electrical tape, 19mm width, 25m length.",
        specs: {
          "Color": "Black, White, Yellow, Blue",
          "Width": "19mm",
          "Length": "25m",
          "Compliance": "REACH, FR Certified"
        }
      },
      {
        name: "PVC Tape (Black, White, Yellow, Blue, 12mm x 25m)",
        image: "/tape-varient-2.png",
        description: "PVC electrical tape, 12mm width, 25m length.",
        specs: {
          "Color": "Black, White, Yellow, Blue",
          "Width": "12mm",
          "Length": "25m",
          "Compliance": "REACH, FR Certified"
        }
      },
    ]
  },

  // --- 8. PVC SLEEVES (HST/UL) ---
  {
    slug: "pvc-sleeves",
    title: "PVC Sleeves",
    description: "Insulation sleeves (including heat-shrink) for wire harnessing, panel wiring, and electronics.",
    categoryImage: "/pvc sleeves.jpg", // Add to /public/images/
    details: `
Use Case:
Used as insulation sleeve in wire harnessing, panel wiring, and electronics.

Variants:
Available in multiple colours, inner diameters, and thicknesses based on application.
Types include general-purpose (REACH/RoHS).
    `,
    variants: [
      {
        name: "PVC Sleeve (REACH Compliant)",
        image: "/sleeves-varient-1.png",
        description: "General purpose PVC insulation sleeve, REACH certified.",
        specs: {
          "Compliance": "REACH",
          "Type": "Non-UL, Non-HST",
          "Inner Diameter": "1mm - 25mm (Available)",
          "Thickness": "0.5mm (Standard)"
        }
      },
      {
        name: "PVC Sleeve (RoHS Compliant)",
        image: "/sleeves-varient-2.png",
        description: "General purpose PVC insulation sleeve, RoHS certified.",
        specs: {
          "Compliance": "RoHS",
          "Type": "Non-UL, Non-HST",
          "Inner Diameter": "1mm - 25mm (Available)",
          "Thickness": "0.5mm (Standard)"
        }
      },
    ]
  }

];


/*
 * =================================================================
 * 4. FINAL EXPORT (This adds placeholder images)
 * =================================================================
 */
export const products: Product[] = rawProducts.map(product => ({
  ...product,
  // Go through each variant...
  variants: product.variants.map(variant => ({
    ...variant,
    // Use the variant.image if it exists, OR create a placeholder using its name
    image: variant.image || placeholder(variant.name)
  }))
}));