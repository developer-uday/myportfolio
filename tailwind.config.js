export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure all files are scanned
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        textStroke: ["hover", "group-hover"], // Enable `group-hover`
      },
    },
    plugins: [],
};
