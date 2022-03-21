/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        watched: {
          100: '#d1c4e9',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
