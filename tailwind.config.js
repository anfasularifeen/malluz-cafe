/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        cafe: {
          dark: '#170C07',            // Header gradient dark
          'dark-header': '#23120A',   // Header gradient top
          bg: '#FBF6EE',              // Warm cream poster background
          surface: '#FFFDF9',         // Card surface
          bar: '#4E2412',             // Rich dark brown category header bar
          'bar-dark': '#3B190B',      // Header bar border
          title: '#2B160E',           // "Our Menu" title dark brown
          gold: '#E09F1F',            // Warm gold accent
          'gold-light': '#F5C451',
          border: '#D8C7B0',          // Warm borders/dividers
          'border-light': '#E8DFC8',
          charcoal: '#23120A',        // Primary text
          muted: '#6E5C4E',           // Secondary subtitle/unit text
        }
      },
      fontFamily: {
        script: ['"Pacifico"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'poster-card': '0 3px 12px rgba(36, 20, 13, 0.05)',
        'poster-bar': '0 2px 6px rgba(78, 36, 18, 0.25)',
        'photo-frame': '0 6px 16px rgba(36, 20, 13, 0.12)',
      }
    },
  },
  plugins: [],
}
