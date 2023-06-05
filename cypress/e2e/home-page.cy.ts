describe('template spec', () => {
  it('passes', () => {
    cy.visit('/home')

    cy.get('p').first().contains('home')
  })
})