/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        watched: {
          100: 'rgba(37, 99, 235, 0.12)',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
