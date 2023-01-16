// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};