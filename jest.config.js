module.exports = {
  roots: ["<rootDir>/src"],
  setupTestFrameworkScriptFile: './setupTests.ts',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    ".+\\.(svg|png)$": "jest-css-modules-transform"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  // testMatch: ["**/EditTemplate/**/(spec|test).ts?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
