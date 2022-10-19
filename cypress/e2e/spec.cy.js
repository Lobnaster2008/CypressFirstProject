

beforeEach(() => {
  cy.get('input[name ="userName"]').as('userName')
  cy.get('input[name ="password"]').as('password')
  cy.get('input[name ="submit"]').as('submit')
 
 
})
afterEach(() => {
  
})

context('Open Home page', () => {
  before(() => {
    cy.visit('//login.php');
  })


describe('Login', () => {
  it('subscribe', () => {
    //cy.visit('/')
    cy.get('@userName').clear
    cy.get('@userName').type('test')
    cy.get('@password').type('test')
    cy.get('@submit').click()
    cy.get('h3').should('have.text', 'Login Successfully')
  });
})
 
})

  
