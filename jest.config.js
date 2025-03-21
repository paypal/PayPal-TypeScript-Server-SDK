module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.base.json' }],
  },
  testPathIgnorePatterns: ["/node_modules/", "/e2e/"],
};
