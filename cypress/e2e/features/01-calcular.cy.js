import menuPage from '../../pages/menuPage';

describe('Feature 01: Validação do menu Calculadora', () => {
  it('deve ser encaminhado até o menu e retornando sucesso', () => {
    menuPage.visit();

    //Clica no menu
    menuPage.navigateToCalculator();

    // Adicione um log após a navegação
    cy.log('Navegou para o menu Calculadora');

    // Valida se o retorno do campo é o esperado para o meio da telas
    menuPage.getTitleCalculo().should('be.visible').and('contain', 'Calculadora de Orçamento');
  });
});