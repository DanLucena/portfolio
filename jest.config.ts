module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/src/lib/settings/setup.ts']
}

export {}