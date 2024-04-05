module.exports = {
  extends: ["plugin:vue/vue3-recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["simple-import-sort", "import"],
  rules: {
    "simple-import-sort/exports": "warn",
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "error",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^\\u0000"],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          // `vue` related packages come first.
          ["^vue", "^@?\\w"],
          // Owned modules. First external modules that starts with "@/" and the internal module imports.
          // The internal import has two groups: one for the parent imports "../", one for the internal imports.
          [
            "^@\\/\\w",
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
          ],
          // Components.
          ["^.+\\.vue$"],
          // Style imports.
          ["^\\u0000.+\\.css$", "^.+\\.s?css$"],
        ],
      },
    ],
  },
};
