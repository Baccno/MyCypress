import menuPage from '../../pages/menuPage';

describe('Feature 01: Validação do menu Calculadora', () => {
  it('deve navegar até o menu Calculadora e retornar sucesso', () => {
    menuPage.visit();
    
    // Adicione um log para confirmar que a página foi visitada
    cy.log('Página visitada');

    menuPage.navigateToCalculator();

    // Adicione um log após a navegação
    cy.log('Navegou para o menu Calculadora');

    menuPage.getSuccessMessage().should('be.visible').and('contain', 'Sucesso');
  });
});