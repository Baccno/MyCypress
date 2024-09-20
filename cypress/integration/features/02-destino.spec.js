import menuPage from '../../pages/menuPage';

describe('Feature 02: Validação do menu Destinos', () => {
  it('deve navegar até o menu Destinos e retornar erro', () => {
    menuPage.visit();
    menuPage.navigateToDestinos();
    
    menuPage.getErrorMessage().should('be.visible').and('contain', 'Erro'); // Ajuste a mensagem conforme necessário
  });
});