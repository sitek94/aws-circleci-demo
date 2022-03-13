import { app, counter } from '../support/selectors'

describe('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('', () => {})
  it('should have a heading with repo name and version, links to Learn React and Vite Docs', () => {
    cy.getByDataCy(app.title)
      .contains('aws-circleci-demo')
      .contains(/v\d\.\d\.\d/)

    cy.getByDataCy(app.linkReact).contains('Learn React')
    cy.getByDataCy(app.linkVite).contains('Vite Docs')
  })

  it('should increment and decrement the counter', () => {
    const clickIncrementBtn = () => cy.getByDataCy(counter.incrementBtn).click()
    const clickDecrementBtn = () => cy.getByDataCy(counter.decrementBtn).click()
    const getCounter = () => cy.getByDataCy(counter.value)

    getCounter().contains(0)
    clickIncrementBtn()
    getCounter().contains(1)
    clickDecrementBtn()
    getCounter().contains(0)
    clickDecrementBtn()
    getCounter().contains(-1)
  })
})
