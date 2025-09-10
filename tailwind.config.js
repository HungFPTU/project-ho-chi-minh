/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Màu quốc kỳ - deep dignified red
        'national-red': '#B22222',
        'national-red-dark': '#8B0000',
        'national-red-light': '#CD5C5C',

        // Màu vàng quốc huy - solemn gold
        'national-gold': '#D4AF37',
        'national-gold-dark': '#B8860B',
        'national-gold-light': '#F4E87C',

        // Màu xanh navy - solemn navy
        'national-navy': '#1B2631',
        'national-navy-light': '#34495E',
        'national-navy-lighter': '#566573',

        // Màu nền trang nghiêm
        'dignified-bg': '#F8F6F0',
        'dignified-bg-dark': '#E8E3D8',

        // Màu accent trang trọng
        'solemn-accent': '#8B4513',
        'solemn-accent-light': '#D2B48C',
      },
      fontFamily: {
        'serif': ['Times New Roman', 'serif'],
        'display': ['Georgia', 'serif'],
      }
    }
  },
  plugins: [],
};
