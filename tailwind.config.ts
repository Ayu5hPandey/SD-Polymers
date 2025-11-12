// // tailwind.config.ts
// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Your new theme palette
//         'background-dark': '#060818',
//         'background-card': '#0B0F2A',
//         'primary': '#4338CA',
//         'primary-hover': '#4F46E5',
//         'secondary': '#6D7BF7',
//         'text-light': '#FFFFFF',
//         'text-secondary': '#A9B2CC',
//         'border-color': '#5A7FFF',
//         'accent-glow': '#1E90FF',
//       },
//     },
//   },
//   plugins: [],
// }
// export default config
// tailwind.config.ts
// tailwind.config.ts
// tailwind.config.ts
// tailwind.config.ts


// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // ✅ NEW "FundingPips" Theme
//         'background-dark': '#000042',    // Deep Navy
//         'background-card': '#0C1267',    // Dark Indigo
//         'primary': '#2D47D6',            // Bright Blue (for primary CTA)
//         'primary-hover': '#2336B1',       // Medium Blue (for hover)
//         'secondary': '#017248',          // Teal Green (for success/buy)
//         'text-light': '#FFFFFF',          // Main white text
//         'text-secondary': '#E0E0E0',      // Light gray subtext
//         'border-color': '#2D47D6',         // Bright blue for borders
//       },
//     },
//   },
//   plugins: [],
// }
// export default config

// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#000042',
        'background-card': '#0C1267',
        'primary': '#2D47D6',
        'primary-hover': '#2336B1',
        
        // ✅ NEW MINUTE ACCENT COLOR
        'secondary': '#017248',       // Teal Green
        'secondary-hover': '#029a60', // Lighter Teal for hover

        'text-light': '#FFFFFF',
        'text-secondary': '#E0E0E0',
        'border-color': '#2D47D6',
      },
    },
  },
  plugins: [],
}
export default config


