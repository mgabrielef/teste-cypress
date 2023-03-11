/// <reference types="cypress" />

context('Buying products', () => {
    beforeEach(() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('Should select one prodcut', () => {
        cy.get('[class="product-block grid"]').eq(1).click()
        //.contains('Aether Gym Pant').click()
        //.last().click()
        //.first().click()
    })

    it.only('Should add product to the cart', () => {
        var quantity = 2

        cy.get('[class="product-block grid"]').eq(0).click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantity)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantity)
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    })
})