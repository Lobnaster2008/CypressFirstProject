
context('Open Home page', () => {
    before(() => {
      cy.visit(`//reservation.php`);
    })
  
beforeEach(() => {
 
  
  
  cy.get('input[value="roundtrip"]').as('tripType')
  cy.get('select[name="fromPort"]').as('fromPort')
  cy.get('select[name="fromMonth"]').as('fromMonth')
  cy.get('select[name="fromDay"]').as('fromDay')
  cy.get('select[name="toPort"]').as('toPort')
  cy.get('select[name="toMonth"]').as('toMonth')
  cy.get('select[name="toDay"]').as('toDay')
  cy.get('input[value="Business"]').as('servClass')
  cy.get('select[name="airline"]').as('airLine')
  cy.get('input[src="images/continue.gif"]').as('findFlights')
})
afterEach(() => {
  
})


  describe('Flights reservation', () => {
    it('book a flight', () => {
     
      
      cy.get('@tripType').click;
      cy.get('@fromPort').select('London');
      cy.get('@fromMonth').select('4');
      cy.get('@fromDay').select('30');
      cy.get('@toPort').select('Paris');
      cy.get('@toMonth').select('7');
      cy.get('@toDay').select('2');
      cy.get('@servClass').click();
      cy.get('@airLine').select('Unified Airlines');
      cy.get('@findFlights').click();
      cy.url().should('eq','https://demo.guru99.com/test/newtours/reservation2.php');

  
    });
  })
});

  
