/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Paleta de colores "aesthetic" para Michi Miradas
      colors: {
        'michi-cream': '#FDFBF7',      // Fondo principal (crema suave) 👈 REEMPLAZAR AQUÍ
        'michi-sand': '#F7F0E6',       // Fondo de tarjetas o secciones (arena clara) 👈 REEMPLAZAR AQUÍ
        'michi-brown-dark': '#3E2723', // Texto principal (café oscuro) 👈 REEMPLAZAR AQUÍ
        'michi-brown-medium': '#6D4C41', // Texto secundario o acentos (marrón medio) 👈 REEMPLAZAR AQUÍ
        'michi-sand-warm': '#A67B5B',  // Botones primarios y acentos (arena cálida) 👈 REEMPLAZAR AQUÍ
        'michi-hover': '#8D6E63',      // Hover de botones (marrón suave) 👈 REEMPLAZAR AQUÍ
      },
      // Tipografías aesthetic (Google Fonts: Playfair Display para títulos, Quicksand para textos)
      fontFamily: {
        'title': ['"Playfair Display"', 'serif'],
        'body': ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
