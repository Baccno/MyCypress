class MenuPage {
  visit() {
    cy.visit('file:///C:/Users/henri/CodexTravel-cypress/index.html');
  }

  navigateToCalculator() {
    cy.get('a[href="#calculadora"]').click(); // Ajuste o seletor conforme necessário
  }

  navigateToDestinos() {
    cy.get('a[href="#destinos"]').click(); // Ajuste o seletor conforme necessário
  }

  getSuccessMessage() {
    return cy.get('.success-message'); // Ajuste o seletor conforme necessário
  }

  getErrorMessage() {
    return cy.get('.error-message'); // Ajuste o seletor conforme necessário
  }
}

export default new MenuPage();