module.exports = {
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        displayName: true,
        fileName: false,
        ssr: true,
      },
    ],
  ],
};
