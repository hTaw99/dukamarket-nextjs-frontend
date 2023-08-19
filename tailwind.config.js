/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        // sm: '2rem',
        // lg: '3rem',
        // xl: '4rem',
        // '2xl': '5rem',
      },
    },
    extend: {
      colors: {
        primary: { 0: "#181F2B", 1: "#2B313C", 2: "#223260" },
        secondary: {
          0: "#3f4555",
          1: "#3c4d62",
          2: "#8094ae",
        },
        loader: "#ffffff1a",
      },

      keyframes: {
        bounced: {
          "0%, 100% ": {
            transform: "translateY(-75%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        bounced: "bounced 0.5s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-inner-border"),
  ],
};
