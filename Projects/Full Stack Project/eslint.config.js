import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],

    plugins: {
      js,
      prettier,
    },

    extends: [
      "js/recommended",
      "plugin:prettier/recommended", // 🔥 main line (conflict fix)
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },

    rules: {
      // ❌ Errors
      "no-undef": "error",
      // "eqeqeq": "error", // === Must
      "no-var": "error",

      // ⚠ Warnings
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "prefer-const": "warn",

      // Prettier rules as ESLint errors
      "prettier/prettier": "error",
    },
  },
]);
