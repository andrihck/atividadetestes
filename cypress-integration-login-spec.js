describe('Teste de login', () => {
    it('deve fazer login e redirecionar para o dashboard', () => {
        cy.visit('/login'); // Substitua pela URL da sua página de login

        cy.get('input[name=username]').type('usuario_teste'); // Substitua pelo seletor correto
        cy.get('input[name=password]').type('senha_teste'); // Substitua pelo seletor correto
        cy.get('button[type=submit]').click();

        // Verifique se a URL mudou para o dashboard
        cy.url().should('include', '/dashboard'); // Substitua pela URL do seu dashboard
    });
});
