describe('unknown pages should redirect to home page', () => {
  it('going to unknown path redirects to home path', () => {
    cy.visit('/xyz')

    cy.url().should('include', '/home')
  })
})