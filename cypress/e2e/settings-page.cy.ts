const validName = 'omar';
const validEmail = 'omar@gmail';

const nonValidName = 'o';
const nonValidEmail = 'omargmail';

describe('should render profile page', () => {
  it('should render profile page', () => {
    cy.visit('/profile')

    cy.get('p').first().contains('profile')
  })

  it('should render a disabled submit button with invalid input (name and email)', () => {
    cy.visit('/profile')

    cy.get('#name').type(nonValidName);
    cy.get('#email').type(nonValidEmail);

    cy.get('form').find('button').should('be.disabled');
  })

  it('should render an enabled submit button with valid input (name and email)', () => {
    cy.visit('/profile')

    cy.get('#name').type(validName);
    cy.get('#email').type(validEmail);

    cy.get('form').find('button').should('be.enabled');
  })
})