const jestConfig = require('@cerner/jest-config-terra');

jestConfig.testMatch = ['**/tests/*.test.js'];

module.exports = {
  ...jestConfig,
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  moduleDirectories: [
    'aggregated-translations',
    'node_modules',
  ],
};
