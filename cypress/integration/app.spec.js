describe('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have a heading with repo name and version', () => {
    cy.getBySel('app-title')
      .contains('aws-circleci-demo')
      .contains(/v\d\.\d\.\d/)
  })

  it('should increment the counter', () => {
    cy.getBySel('counter-btn')
      .contains('0')
      .click()
      .contains('1')
      .click()
      .contains('2')
      .click()
      .contains('3')
  })
})
