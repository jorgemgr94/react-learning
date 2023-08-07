module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/cypress/setupTests.ts'],
  testMatch: [
    '<rootDir>/cypress/**/*.(spec).(ts|tsx)',
    '<rootDir>/src/**/*.(spec).(ts|tsx)'
  ],
  testPathIgnorePatterns: ['<rootDir>/cypress/e2e/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true
          },
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    'jest-transform-stub'
  }
};
