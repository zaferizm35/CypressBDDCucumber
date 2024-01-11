const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  experimentalWebKitSupport: true,
  screenshotOnRunFailure: true,
  screenshotsFolder:'cypress/screenshots',
  
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())
    },


    specPattern: 'cypress/e2e/features/*/*.feature',
    excludeSpecPattern: "**/cypress/pages/*,cypress/integration/step-definition/*",
    failOnStatusCode: true,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalWebKitSupport: true,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 80000,
    watchForFileChanges: false,
    video: true,
    reporter:'mochawesome',
    reporterOptions:{
      reportDir: 'cypress/results',
      overwrite:true,
      html: true,
      json: true,
      code: false
    }
  }
});