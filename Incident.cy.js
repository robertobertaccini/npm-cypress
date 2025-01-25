Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://lab-03254-bos.lab-internal.pega.com/prweb')
    cy.get('input[id="txtUserID"]').type("AUTCustomer@tellusmoreref")
    cy.get('input[id="txtPassword"]').type("Devops2025!")
    cy.get('button[id="sub"]').click()

    cy.contains('Incident').click()

    cy.get('[data-testid="IncidentType:select:control"]').select('Customer service issue');
    cy.get('[data-testid="IncidentSubType:select:control"]').select('Staff conduct issue');
    cy.get('button[name=next]').click()

    cy.get('[data-testid="CommunicationChannel:select:control"]').select('E-mail');
    cy.get('button[name=next]').click()

    cy.contains('Fill form with AI').click()
    cy.wait(5000); // wait AI to work
    cy.get('button[name=next]').click()

    cy.get(('button[name=submit]'), { timeout: 10000 }).should('be.visible')
    cy.window().scrollTo('bottom',{ timeout: 10000 })
    cy.get('[data-testid="UserConsent"]').click({force: true})
    cy.get('[data-testid="PrivacyPolicy"]').click({force: true})

    cy.get('button[name=submit]').click()

    //cy.get('[data-testid=":status:"] > span[class]').should("have.text","Pending-Dispatch")

  })
})
