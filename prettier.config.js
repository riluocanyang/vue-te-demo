// module.exports = {
//   printWidth: 100,
//   semi: true,
//   vueIndentScriptAndStyle: true,
//   singleQuote: true,
//   trailingComma: 'all',
//   proseWrap: 'never',
//   htmlWhitespaceSensitivity: 'strict',
//   endOfLine: 'auto',
// }

module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  vueIndentScriptAndStyle: true,
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}
