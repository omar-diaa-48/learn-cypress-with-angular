const validName = 'omar';
const validEmail = 'omar@gmail';

const nonValidName = 'o';
const nonValidEmail = 'omargmail';

describe('should render settings page', () => {
  it('should render settings page', () => {
    cy.visit('/settings')

    cy.get('p').first().contains('settings')
  })

  it('should render a disabled submit button with invalid input (name and email)', () => {
    cy.visit('/settings')

    cy.get('#name').type(nonValidName);
    cy.get('#email').type(nonValidEmail);

    cy.get('form').find('button').should('be.disabled');
  })
})