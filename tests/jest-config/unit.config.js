/**
 * Developed by Anthony Cox in 2024
 */
const { configureUnitTests } = require('ajc-testing-code');

const jestConfig = configureUnitTests();
jestConfig.coveragePathIgnorePatterns.push('<rootDir>/src/index.js');
jestConfig.moduleNameMapper = {};
jestConfig.setupFilesAfterEnv = [];

module.exports = jestConfig;
