module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: ['./jest.setup.js'], // Uncomment if you create a jest.setup.js
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Added to support path aliases like @/components
  },
};
