module.exports = {
  displayName: 'junk-nx-sam',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$'
    },
  },
  coverageDirectory: '../../coverage/apps/api',
  snapshotSerializers: [],
};
