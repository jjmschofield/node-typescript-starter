module.exports = {
  "roots": [
    "./src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testEnvironment": "node",
  "reporters": [
    "default",
    "jest-junit"
  ],
  "coverageReporters": [
    "text",
    "html",
    "lcov"
  ],
  "coverageDirectory": "./tests/reports/unit/coverage",
  "collectCoverageFrom": [
    "src/**/*.ts"
  ],
  "coveragePathIgnorePatterns": [
    "__mock__",
    ".test.int.ts"
  ]
};
