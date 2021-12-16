module.exports = {
  env: {
    browser: true
  },
  extends: [
    "standard"
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: "error",
    "no-console": "off",
    "no-unused-expressions": "error",
    "no-unused-vars": "error",
    "no-throw-literal": "off",
  }
}
