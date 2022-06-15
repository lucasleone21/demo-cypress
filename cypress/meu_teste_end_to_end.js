describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
        // abre o site
        cy.visit('http://localhost:5000/')

        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
       
       // Calcula o frete
        cy.get('[data-id=3]').within(() => {
            cy.get('input').type('10000-000')
            cy.contains('Calcular Frete').click().then
            cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')

       // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()

        cy.contains('Comprar').click()
        cy.wait(2000)
        cy.get('.swal-button--confirm').click()
    })
  })