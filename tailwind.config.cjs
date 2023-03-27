/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "400px",
      xs: "501px",
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        "main-red": "#DB102D",
        "main-blue": "#244088",
        "silver-gray": "#E6E6E6",
        "velvet-blue": "#40434F",
        "bleue-royale": "#25988B",
        "sweet-yellow": "#F8DE7A",
        "button-hover": "#c50e28",
      },
      backgroundImage: {
        "fleet-truck-1": "url('src/assets/images/fleet-truck-1.webp)",
        "fleet-truck-2": "url('src/assets/images/fleet-truck-2.webp')",
        "fleet-truck-3": "url('src/assets/images/fleet-truck-3.webp')",
        "fleet-truck-4": "url('src/assets/images/fleet-truck-4.webp')",
        "fleet-explore-card": "url('src/assets/images/fleet-explore-card')",
      },
      boxShadow: {
        opportunities: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideFromBottom: {
          "0%": { transform: "translateY(1000px)" },
          "100%": { transform: "translateY(0)" },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-1000px)" },
          "100%": { transform: "translateX(0)" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(1000px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideFromLeft: "slideFromLeft 1.2s ease-in-out",
        slideFromRight: "slideFromRight 1.2s ease-in-out",
        slideFromBottom: "slideFromBottom 1.5 ease",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
