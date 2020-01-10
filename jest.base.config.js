module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    './setupJest.ts'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/src/test.ts'
  ],
  globals: {
    "ts-jest": {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: "\\.html$",
      astTransformers: [
        '<rootDir>/node_modules/jest-preset-angular/InlineHtmlStripStylesTransformer'
      ]
    }
  },
  moduleNameMapper: {
    '^@osalam/(.*)$': '<rootDir>/src/app/$1',
    '^@osalam/domain$': '<rootDir>/src/app/domain/',
    '^@osalam/shared$': '<rootDir>/src/app/shared/',
    '^@osalam/core$': '<rootDir>/src/app/core/'
  }
};
