import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://carshare.yomafleet.com/account/register',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    setupNodeEvents(on, config) {
      // Plugins here
    }
  }
})