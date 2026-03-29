module.exports = [
  {
    ignores: ["coverage/**", "node_modules/**"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs"
    },
    rules: {}
  }
];