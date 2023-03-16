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
    },
    extend: {
      colors: {
        "main-red": "#DB102D",
        "main-blue": "#244088",
        "silver-gray": "#E6E6E6",
        "velvet-blue": "#40434F",
        "bleue-royale": "#25988B",
        "sweet-yellow": "#F8DE7A",
      },
      backgroundImage: {
        "fleet-truck-1": "url('src/assets/images/fleet-truck-1.png)",
        "fleet-truck-2": "url('src/assets/images/fleet-truck-2.png')",
        "fleet-truck-3": "url('src/assets/images/fleet-truck-3.png')",
        "fleet-truck-4": "url('src/assets/images/fleet-truck-4.png')",
        "fleet-explore-card": "url('src/assets/images/fleet-explore-card')",
      },
      boxShadow: {
        opportunities: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
