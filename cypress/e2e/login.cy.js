/// <reference types="cypress" />

context('Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  })

  it('Should login successfully', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('a > .hidden-xs').should('contain', 'Welcome')

  })
  it('Should show error message if user is invalid', () => {
    cy.get('#username').type('aluno@teste')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: o usuário aluno@teste não está cadastrado neste site')
  })

  it('Should show error message if password is invalid', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@test')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
  })
})