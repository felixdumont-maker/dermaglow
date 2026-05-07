/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        "chrome >= 111",
        "firefox >= 113",
        "safari >= 15.4",
        "edge >= 111",
      ],
    },
  },
};

export default config;
