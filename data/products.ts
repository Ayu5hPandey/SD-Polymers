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
  
  // --- 1. WIRE HARNESS CONNECTORS (FIXED) ---
  // --- I have REMOVED all "image:" properties from this section ---
  // --- This will force the placeholder to be used and fix 404 errors. ---
  {
    slug: "wire-harness-connectors",
    title: "Wire Harness Connectors",
    description: "Over 50 types of connectors for automotive, industrial, and consumer electrical systems.",
    categoryImage: "/images/wire-harness-connectors.jpg", // Add to /public/images/
    details: `
Use Case:
Used to join and organize multiple wires in automotive, industrial, and consumer electrical systems for secure and efficient connectivity.

Variants:
We offer over 50 types including C110 Series, C90 Series, fuse connectors, covers, caps, and more—available in multiple colors and pin configurations.
    `,
    variants: [
      { name: "SDP-001", description: "Compact 2-pole PF connector from the C110 series...", specs: { "Part Name": "C110 srs 2 PF-NY6 (N)" } },
      { name: "SDP-002", description: "3-pole PF connector (C110 series)...", specs: { "Part Name": "C110 srs 3 PF-NY6 (N)" } },
      { name: "SDP-003", description: "4-pole PF connector in the C110 family...", specs: { "Part Name": "C110 srs 4 PF-NY6 (N)" } },
      { name: "SDP-004", description: "6-pole PF connector offering compact multi-pin...", specs: { "Part Name": "C110 srs 6 PF-NY6 (N)" } },
      { name: "SDP-005", description: "6-pole PM connector from C110 series with improved pin...", specs: { "Part Name": "C110 srs 6 PM-NY6 (N)" } },
      { name: "SDP-006", description: "3-pole PM connector variant for secure mating...", specs: { "Part Name": "C110 srs 3 PM-NY6 (N)" } },
      { name: "SDP-007", description: "4-pole PM connector built for vibration resistance...", specs: { "Part Name": "C110 srs 4 PM-NY6 (N)" } },
      { name: "SDP-008", description: "2-pole PM connector — a small form factor option...", specs: { "Part Name": "C110 srs 2 PM-NY6 (N)" } },
      { name: "SDP-009", description: "C90 series 2-pin PM connector with weather-proofing...", specs: { "Part Name": "C90-2PM-N-WP" } },
      { name: "SDP-010", description: "C90 series 2-pin PF connector with waterproofing...", specs: { "Part Name": "C90-2PF-N-WP" } },
      { name: "SDP-011", description: "3-pin PM connector from the C90 family with waterproof...", specs: { "Part Name": "C90-3PM-N-WP" } },
      { name: "SDP-012", description: "3-pin PF waterproof connector (C90) optimized for signal...", specs: { "Part Name": "C90-3PF-N-WP" } },
      { name: "SDP-013", description: "6-pole PM waterproof connector with flange (FLW)...", specs: { "Part Name": "C90-6PM-N-WP-FLW" } },
      { name: "SDP-014", description: "6-pole PF waterproof connector (NF variant) featuring robust...", specs: { "Part Name": "C90-6PF-N-WP (NF)" } },
      { name: "SDP-015", description: "4-pole PM waterproof connector for multi-circuit...", specs: { "Part Name": "C90-4PM-N-WP" } },
      { name: "SDP-016", description: "Headlamp connector assembly with cover coupler...", specs: { "Part Name": "HEAD LAMP WITH COVER CUPLER" } },
      { name: "SDP-017", description: "Headlamp connector without cover coupler...", specs: { "Part Name": "HEAD LAMP W/O COVER CUPLER" } },
      { name: "SDP-018", description: "Single fuse base connector for inline fuse mounting...", specs: { "Part Name": "1 FUSE BASE CONNECTOR" } },
      { name: "SDP-019", description: "Single fuse base connector offering secure fuse...", specs: { "Part Name": "SINGLE FUSE BASE CONNECTOR" } },
      { name: "SDP-020", description: "2+2 fuse connector providing two pairs of fused circuits...", specs: { "Part Name": "FUSE CONNECTOR (2+2)" } },
      { name: "SDP-021", description: "1+1 fuse connector designed for dual single-circuit...", specs: { "Part Name": "FUSE CONNECTOR (1+1)" } },
      { name: "SDP-022", description: "Single pole mini fuse connector that accepts mini blade...", specs: { "Part Name": "SINGLE POLE MINI FUSE CONNECTOR" } },
      { name: "SDP-023", description: "Single glass fuse cover to protect in-line glass fuses...", specs: { "Part Name": "SINGLE GLASS FUSE COVER" } },
      { name: "SDP-024", description: "Double glass fuse cover that houses two glass fuses...", specs: { "Part Name": "DOUBLE GLASS FUSE COVER" } },
      { name: "SDP-025", description: "Alternative single glass fuse cover variant...", specs: { "Part Name": "SINGLE GLASS FUSE COVER" } },
      { name: "SDP-026", description: "6-pole fuse base with attached cover...", specs: { "Part Name": "6 POLE FUSE BASE WITH ATTACHED COVER" } },
      { name: "SDP-027", description: "6-pole fuse base providing multiple fuse slots...", specs: { "Part Name": "6 POLE FUSE BASE" } },
      { name: "SDP-028", description: "6-pole fuse cover — replacement cover for 6-pole...", specs: { "Part Name": "6 POLE FUSE COVER" } },
      { name: "SDP-029", description: "14-pole fuse base designed for larger fuse panels...", specs: { "Part Name": "14 POLE FUSE BASE" } },
      { name: "SDP-030", description: "14-pole fuse cover — protective cap for 14-slot...", specs: { "Part Name": "14 POLE FUSE COVER" } },
      { name: "SDP-031", description: "8-pole female connector suitable for multi-wire...", specs: { "Part Name": "8 POLE FEMALE CONNECTOR" } },
      { name: "SDP-032", description: "250 series 6-pole female connector offering...", specs: { "Part Name": "250 SRS 6 POLE FEMALE CONNECTOR" } },
      { name: "SDP-033", description: "2-pole maxi fuse base for high-current protections...", specs: { "Part Name": "2 POLE MAXI FUSE BASE" } },
      { name: "SDP-034", description: "Speedometer assembly — vehicle speed instrument...", specs: { "Part Name": "SPEEDO METER" } },
      { name: "SDP-035", description: "Brown speedometer variant — color-matched...", specs: { "Part Name": "BROWN SPEEDO METER" } },
      { name: "SDP-036", description: "Fog lamp connector designed for robust exterior...", specs: { "Part Name": "FOG LAMP CONNECTOR" } },
      { name: "SDP-037", description: "12-pole hybrid connector — high-density...", specs: { "Part Name": "12 POLE HYBRID CONNECTOR" } },
      { name: "SDP-038", description: "Single-pole Vespa connector — small form factor...", specs: { "Part Name": "1 POLE VESPA CONNECTOR" } },
      { name: "SDP-039", description: "Single-pole positive-lock connector (FMC)...", specs: { "Part Name": "1 POLE POSITIVE LOCK CONNECTOR (FMC)" } },
      { name: "SDP-040", description: "Cover LPT 3118 TC-D1 — protective housing...", specs: { "Part Name": "COVER LPT 3118 TC-D1" } },
      { name: "SDP-041", description: "T-cover — snap on protective cap...", specs: { "Part Name": "T-COVER" } },
      { name: "SDP-042", description: "Bracket component used to mount or secure...", specs: { "Part Name": "BRACKET" } },
      { name: "SDP-043", description: "General mounting or spacer component...", specs: { "Part Name": "2.88" } },
      { name: "SDP-044", description: "PVC protective cap for terminal ends...", specs: { "Part Name": "PVC CAP KMCL" } },
      { name: "SDP-045", description: "KWA600 red protective cap — color-coded cap...", specs: { "Part Name": "KWA600 RED CAP" } },
      { name: "SDP-046", description: "Alternate boot cap to protect alternator...", specs: { "Part Name": "ALT BOOT CAP" } },
      { name: "SDP-047", description: "EPDM rubber grommet — flexible sealing...", specs: { "Part Name": "EPDM RUBBER GROMMET" } },
      { name: "SDP-048", description: "General grommet used to protect wiring...", specs: { "Part Name": "GROMMET" } },
      { name: "SDP-049", description: "Small accessory part (unspecified)...", specs: { "Part Name": "2.30" } },
      { name: "SDP-050", description: "Replacement grommet — commonly used for cable...", specs: { "Part Name": "GROMMET" } },
      { name: "SDP-051", description: "Bullet cap (green) — insulated end cap...", specs: { "Part Name": "BULLET CAP (GREEN CAP)" } },
      { name: "SDP-052", description: "Bullet cap (green) — duplicate listing...", specs: { "Part Name": "BULLET CAP (GREEN CAP)" } }
    ]
  },

  // --- 2. P.V.C GRANULES ---
  {
    slug: "pvc-granules",
    title: "P.V.C Granules",
    description: "RoHS and REACH certified PVC granules for wires, cables, automotive parts, and more.",
    categoryImage: "/images/pvc-granules.jpg", // Add to /public/images/
    details: `
Use Case:
Used in the manufacturing of wires, cables, automotive parts, pipes, and consumer electrical products.

Variants:
Available in soft and rigid grades, customized for flame-retardant (FR), UV-resistant, or high-flexibility applications. Offered in various colors and hardness levels. All types are available with ROHS and REACH certifications.
    `,
    variants: [
      {
        name: "REACH Compliant PVC Granules",
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
    categoryImage: "/images/terminal-sleeves.jpg", // Add to /public/images/
    details: `
Use Case:
Provides insulation and a secure fit to terminal wire ends in automotive, industrial, and appliance wiring.

Certifications:
Available in ROHS, REACH, and FR (Flame Retardant) certified variants.

Variants:
We offer a wide range of types, including Flag Caps, Straight Caps, Battery Covers, and Dip Covers for various connector sizes (e.g., 4.8mm, 6.4mm).
    `,
    variants: [
      { name: "SDP-001 Battery Cover", description: "Battery terminal cover", specs: { "Part Name": "SDP-001", "Type": "Battery Cover" } },
      { name: "SDP-002 Battery Cover", description: "Battery terminal cover", specs: { "Part Name": "SDP-002", "Type": "Battery Cover" } },
      { name: "SDP-003 CDBTC-12", description: "Connector dip cover, 12-pin", specs: { "Part Name": "SDP-003", "Type": "Dip Cover" } },
      { name: "SDP-004 CDBTC-15", description: "Connector dip cover, 15-pin", specs: { "Part Name": "SDP-004", "Type": "Dip Cover" } },
      { name: "SDP-005 PC0056", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-005", "Type": "Moulded Part" } },
      { name: "SDP-006 PC0057", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-006", "Type": "Moulded Part" } },
      { name: "SDP-007 PC0087", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-007", "Type": "Moulded Part" } },
      { name: "SDP-008 PC0087A", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-008", "Type": "Moulded Part" } },
      { name: "SDP-009 PC0055", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-009", "Type": "Moulded Part" } },
      { name: "SDP-010 Head Light Cover", description: "Head light connector cover", specs: { "Part Name": "SDP-010", "Type": "Head Light Cover" } },
      { name: "SDP-011 CDRC-09", description: "Connector dip cover", specs: { "Part Name": "SDP-011", "Type": "Dip Cover" } },
      { name: "SDP-012 Battery Cover", description: "Battery terminal cover", specs: { "Part Name": "SDP-012", "Type": "Battery Cover" } },
      { name: "SDP-013 Flag Cap", description: "Flag terminal insulation sleeve", specs: { "Part Name": "SDP-013", "Type": "Flag Cap" } },
      { name: "SDP-014 Flag Cap", description: "Flag terminal insulation sleeve", specs: { "Part Name": "SDP-014", "Type": "Flag Cap" } },
      { name: "SDP-015 Flag Cap", description: "Flag terminal insulation sleeve", specs: { "Part Name": "SDP-015", "Type": "Flag Cap" } },
      { name: "SDP-016 6.4 Cap", description: "6.4mm straight terminal sleeve", specs: { "Part Name": "SDP-016", "Type": "6.4 Cap" } },
      { name: "SDP-017 4.8 Cap", description: "4.8mm straight terminal sleeve", specs: { "Part Name": "SDP-017", "Type": "4.8 Cap" } },
      { name: "SDP-018 Sleeve", description: "General purpose PVC sleeve", specs: { "Part Name": "SDP-018", "Type": "Sleeve" } },
      { name: "SDP-020 Sleeve", description: "General purpose PVC sleeve", specs: { "Part Name": "SDP-020", "Type": "Sleeve" } },
      { name: "SDP-021 Dip Cover C-250 8PM", description: "Dip cover for 250 series 8-pin male", specs: { "Part Name": "SDP-021", "Type": "Dip Cover" } },
      { name: "SDP-022 Dip Cover C-250 8PM", description: "Dip cover for 250 series 8-pin male", specs: { "Part Name": "SDP-022", "Type": "Dip Cover" } },
      { name: "SDP-023 Dip Cover 24 FEMALE", description: "Dip cover for 24-pin female connector", specs: { "Part Name": "SDP-023", "Type": "Dip Cover" } },
      { name: "SDP-024 DIP COVER -250 SRS 4PF", description: "Dip cover for 250 series 4-pin female", specs: { "Part Name": "SDP-024", "Type": "Dip Cover" } },
      { name: "SDP-025 PC0055E", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-025", "Type": "Moulded Part" } },
      { name: "SDP-026 PC57A", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-026", "Type": "Moulded Part" } },
      { name: "SDP-027 PC0057W", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-027", "Type": "Moulded Part" } },
      { name: "SDP-028 Battery Cover", description: "Battery terminal cover", specs: { "Part Name": "SDP-028", "Type": "Battery Cover" } },
      { name: "SDP-029 PC0057K", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-029", "Type":"Moulded Part" } },
      { name: "SDP-030 Battery Cover", description: "Battery terminal cover", specs: { "Part Name": "SDP-030", "Type": "Battery Cover" } },
      { name: "SDP-031 PC0057W", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-031", "Type": "Moulded Part" } },
      { name: "SDP-032 PC0057L", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-032", "Type": "Moulded Part" } },
      { name: "SDP-033 PC0101", description: "Custom moulded PVC part, large", specs: { "Part Name": "SDP-033", "Type": "Moulded Part" } },
      { name: "SDP-034 PC120", description: "Small PVC cap", specs: { "Part Name": "SDP-034", "Type": "Cap" } },
      { name: "SDP-035 PC122", description: "Small PVC cap", specs: { "Part Name": "SDP-035", "Type": "Cap" } },
      { name: "SDP-036 PC0326", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-036", "Type": "MOlded Part" } },
      { name: "SDP-037 PC0026", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-037", "Type": "Moulded Part" } },
      { name: "SDP-038 PC0054", description: "Custom moulded PVC part", specs: { "Part Name": "SDP-038", "Type": "Moulded Part" } },
      { name: "SDP-039 PC0059C", description: "Small PVC cap", specs: { "Part Name": "SDP-039", "Type": "Cap" } },
      { name: "SDP-040 PC024", description: "Small PVC cap", specs: { "Part Name": "SDP-040", "Type": "Cap" } }
    ]
  },

  // --- 4. CABLE TIES ---
  {
    slug: "cable-ties",
    title: "Cable Ties",
    description: "RoHS certified cable ties for bundling, securing, and organizing.",
    categoryImage: "/images/cable-ties.jpg", // Add to /public/images/
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
        description: "Continuous 1000m spool of black cable tie material, RoHS certified.",
        specs: {
          "Color": "Black",
          "Length": "1000m Spool",
          "Compliance": "RoHS Certified"
        }
      },
      {
        name: "Cable Tie Spool (White)",
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
    categoryImage: "/images/silicone-wire.jpg", // Add to /public/images/
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
    categoryImage: "/images/cat-5-cable.jpg", // Add to /public/images/
    details: `
Use Case:
Used for Ethernet networking, telephone wiring, and data transmission in residential, commercial, and industrial setups.

Variants:
Available in UTP (Unshielded) and STP (Shielded) types, solid or stranded cores, and in multiple colors and lengths.
    `,
    variants: [
      {
        name: "CAT 5 Cable (UTP, Blue)",
        description: "Unshielded Twisted Pair (UTP) CAT 5 cable in blue.",
        specs: {
          "Type": "UTP",
          "Color": "Blue",
          "Compliance": "RoHS/REACH Certified"
        }
      },
      {
        name: "CAT 5 Cable (UTP, Grey)",
        description: "Unshielded Twisted Pair (UTP) CAT 5 cable in grey.",
        specs: {
          "Type": "UTP",
          "Color": "Grey",
          "Compliance": "RoHS/REACH Certified"
        }
      },
      {
        name: "CAT 5 Cable (STP, Grey)",
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
    categoryImage: "/images/pvc-tape.jpg", // Add to /public/images/
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
        name: "PVC Tape (Black, 19mm x 25m)",
        description: "Black PVC electrical tape, 19mm width, 25m length.",
        specs: {
          "Color": "Black",
          "Width": "19mm",
          "Length": "25m",
          "Compliance": "REACH, FR Certified"
        }
      },
      {
        name: "PVC Tape (Blue, 19mm x 25m)",
        description: "Blue PVC electrical tape, 19mm width, 25m length.",
        specs: {
          "Color": "Blue",
          "Width": "19mm",
          "Length": "25m",
          "Compliance": "REACH, FR Certified"
        }
      },
      {
        name: "PVC Tape (Yellow, 19mm x 25m)",
        description: "Yellow PVC electrical tape, 19mm width, 25m length.",
        specs: {
          "Color": "Yellow",
          "Width": "19mm",
          "Length": "25m",
          "Compliance": "REACH, FR Certified"
        }
      },
      {
        name: "PVC Tape (Black, 12mm x 25m)",
        description: "Black PVC electrical tape, 12mm width, 25m length.",
        specs: {
          "Color": "Black",
          "Width": "12mm",
          "Length": "25m",
          "Compliance": "REACH, FR Certified"
        }
      },
      {
        name: "PVC Tape (White, 19mm x 25m)",
        description: "White PVC electrical tape, 19mm width, 25m length.",
        specs: {
          "Color": "White",
          "Width": "19mm",
          "Length": "25m",
          "Compliance": "REACH, FR Certified"
        }
      }
    ]
  },

  // --- 8. PVC SLEEVES (HST/UL) ---
  {
    slug: "pvc-sleeves",
    title: "PVC Sleeves",
    description: "Insulation sleeves (including heat-shrink) for wire harnessing, panel wiring, and electronics.",
    categoryImage: "/images/pvc-sleeves.jpg", // Add to /public/images/
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