import menuPage from '../../pages/menuPage';

describe('Feature 02: Validação do menu Destinos', () => {
  it('deve navegar até o menu Destinos retornando sucesso', () => {

    menuPage.visit();
    
    //Clica no menu
    menuPage.navigateToDestinos();

    // Adicione um log após a navegação
    cy.log('Navegou para o menu Destinos');

    // Valida se o retorno do campo é o esperado para o meio da telas
    menuPage.getTitleDestinos().should('be.visible').and('contain', 'Nossos Destinos');
  });
});