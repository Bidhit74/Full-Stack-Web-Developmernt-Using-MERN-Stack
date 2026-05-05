import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],

    plugins: { js },

    extends: ["js/recommended"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },

    rules: {
      // ❌ Error (must fix)
      "no-undef": "error",
      // eqeqeq: "error", // baad use === only use
      "no-var": "error",

      // ⚠ Warning (good practice)
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // ✨ Code quality
      "prefer-const": "warn",
      // "no-console": "warn",
    },
  },
]);
