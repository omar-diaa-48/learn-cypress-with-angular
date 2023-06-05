describe('template spec', () => {
  it('passes', () => {
    cy.visit('/settings')

    cy.get('p').first().contains('settings')
  })
})