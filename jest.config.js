module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['<rootDir>/src/**/*.{spec,test}.js', '<rootDir>/tests/**/*.{spec,test}.js'],

  // Make it run in 1 process
  maxWorkers: 1,

  setupFilesAfterEnv: ['./src/setup-test.js'],
};
