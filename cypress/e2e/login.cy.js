/// <reference types="cypress" />

context('Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  })

  it('Should login successfully', () => {
    cy.get('#username')

  })
  //it('Should show error message if user or password is invalid', () => {
      
  //})
})