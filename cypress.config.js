const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/features/**/*.cy.{js,jsx,ts,tsx}', // Verifique se o padrão está correto
    supportFile: 'cypress/support/e2e.js', // Especifique o caminho do arquivo de suporte
  },
});