module.exports = {
  // Other Jest configuration options
  testMatch: ["**/*.test.(js|jsx|ts|tsx)"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
