module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "import/no-unused-modules": [
      1,
      { unusedExports: true, missingExports: true },
    ],

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/extensions": [
      "error",
      "always",
      {
        ts: "always", // Require .ts extension for TypeScript files
        tsx: "always", // Require .tsx extension for TypeScript JSX files
        js: "always", // Require .js extension for JavaScript files
        jsx: "always", // Require .jsx extension for JavaScript JSX files
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"], // Resolve TS and TSX extensions
        node,
      },
    },
  },
};
