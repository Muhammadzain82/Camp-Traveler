/** Stylelint config for Tailwind CSS v4 */
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-tailwindcss",
  ],
  rules: {},
  overrides: [
    {
      files: ["app/globals.css"],
      rules: {
        // Allow Tailwind v4 at-rules in our theme file only
        "at-rule-no-unknown": [true, {
          ignoreAtRules: ["theme", "apply", "import"],
        }],
        // Allow custom properties exported by @theme
        "property-no-unknown": [true, { ignoreProperties: [/^--/] }],
        // Prefer string imports for Tailwind v4
        "import-notation": "string",
        // Formatting preferences for this generated utility file
        "custom-property-empty-line-before": null,
        "color-hex-length": "long",
        "font-family-name-quotes": null,
        "selector-class-pattern": null,
        "rule-empty-line-before": null,
      },
    },
  ],
};


