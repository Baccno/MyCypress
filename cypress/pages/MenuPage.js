class MenuPage {
  visit() {
    cy.visit('http://localhost:8080/index.html'); // Use a URL do servidor local
  }

  navigateToCalculator() {
    cy.get('a[href="#calculadora"]').click(); 
  }

  navigateToDestinos() {
    cy.get('a[href="#destinos"]').click(); 
  }

  getTitleCalculo() {
    return cy.get('#calculadora > h2'); 
  }

  getTitleDestinos() {
    return cy.get('#destinos > h2'); 
  }
}

export default new MenuPage();