/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#E8E8F64D",
        "gray-50": "black",
        "gray-100": "black",
        "gray-500": "black",
        "primary-100": "#0EAEBA",
        "primary-300": "#F6A409",
        "primary-500": "#FF6B66",
        "secondary-400": "#56E9C1",
        "secondary-500": "#FFC132",
      },
      spacing: {
        '0.17px': '0.17px',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(210.96deg, rgba(86, 233, 193, 0.5) 13.13%, rgba(14, 174, 186, 0.8) 47.19%)',
      },
      background: (theme) => ({

        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        inter: ['Inter', 'sans'],
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        '24': '24px',
        '20': '20px',
        '14': '14px',
        '12': '12px',
      },
      fontWeight: {
        'black': '900',
        'bold': '700',
        'semibold': '600',
        'medium': '500',
        'normal': '400',
      
      },

      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
