describe('should render home page', () => {
  it('should render home page', () => {
    cy.visit('/home')

    cy.get('p').first().contains('home')
  })
})