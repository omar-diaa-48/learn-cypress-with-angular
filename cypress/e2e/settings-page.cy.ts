describe('should render settings page', () => {
  it('should render settings page', () => {
    cy.visit('/settings')

    cy.get('p').first().contains('settings')
  })
})