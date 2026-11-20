/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          dark: '#170C07',            // Header gradient dark
          'dark-header': '#24140D',   // Header gradient top
          bg: '#FBF6EE',              // Warm cream poster background
          surface: '#FFFDF9',         // Card surface
          bar: '#5A2812',             // Rich brown rounded header bar
          'bar-dark': '#471E0C',      // Header bar border / gradient
          title: '#2B160E',           // "Our Menu" title dark brown
          gold: '#E09F1F',            // Warm gold accent
          'gold-light': '#F6C15C',
          border: '#E8DFC8',          // Light warm dividers
          'border-dark': '#CDBFA6',
          charcoal: '#22150F',        // Primary text
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
        'poster-bar': '0 2px 6px rgba(90, 40, 18, 0.25)',
        'photo-frame': '0 6px 16px rgba(36, 20, 13, 0.12)',
      }
    },
  },
  plugins: [],
}
