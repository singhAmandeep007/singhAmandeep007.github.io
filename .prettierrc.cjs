module.exports = {
  plugins: ["prettier-plugin-organize-imports"],
  // Indent lines with tabs instead of spaces.
  // https://prettier.io/docs/en/options.html#tabs
  useTabs: false,

  // Specify the line length that the printer will wrap on
  // https://prettier.io/docs/en/options.html#print-width
  printWidth: 120,

  // Specify the number of spaces per indentation-level.
  // https://prettier.io/docs/en/options.html#tab-width
  tabWidth: 2,

  // Use single quotes instead of double quotes.
  // https://prettier.io/docs/en/options.html#quotes
  singleQuote: false,

  // Print trailing commas wherever possible
  // https://prettier.io/docs/en/options.html#trailing-commas
  trailingComma: "es5",

  // Enforce single attribute per line in HTML and JSX.
  // https://prettier.io/docs/en/options.html#single-attribute-per-line
  singleAttributePerLine: true,

  // Print semicolons at the ends of statements.
  // https://prettier.io/docs/en/options.html#semicolons
  semi: true,

  // Print spaces between brackets in object literals.
  // https://prettier.io/docs/en/options.html#bracket-spacing
  bracketSpacing: true,

  // Put the `>` of a multi-line JSX element at the eol.
  // https://prettier.io/docs/en/options.html#bracket-line
  bracketSameLine: false,
};
