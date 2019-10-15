module.exports = {
  "globals": {
    "nprocess": {
      "env": {
        "GITLAB_URL": "gitlab.com",
        "GITLAB_PRIVATE_TOKEN": "12345"
      }
    }
  },
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/src/app/.+.mock(s)?.ts",
  ],
  "testPathIgnorePatterns": [
    "/cypress/",
    ".+.spec.js"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": -10
    }
  }
}