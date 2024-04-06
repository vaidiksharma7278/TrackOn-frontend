module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0FFD2",
        secondary: "#B3D89C",
        green: "#8dffa8",
        yellow: "#e1ff31",
        lightblue:"#77A6B6",
        darkblue:"#4D7298",
      },
      fontSize: {
        "10xl": "32rem",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: false,
  },
};
