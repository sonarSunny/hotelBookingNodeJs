/**
 * @description: Jest config file.
 */

module.exports = {
    globalSetup: './setup.js',
    globalTeardown: './teardown.js',
    testEnvironment: './puppeteer_environment.js',
    preset: "jest-puppeteer",
    // globals: {
    //     URL: "http://localhost:8080"
    // },
    testMatch: [
        // "**/tests/**/*.test.js",
        // "**/test/**/*.spec.js"
    ],
    verbose: true
}
