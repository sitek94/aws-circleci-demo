import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Counter } from './Counter'

describe('Counter', () => {
  it('should render the counter with count set to zero, increment and decrement buttons', () => {
    render(<Counter />)
    expect(screen.getByText(/0/i)).toBeInTheDocument()
    expect(getIncrementBtn()).toBeInTheDocument()
    expect(getDecrementBtn()).toBeInTheDocument()
  })

  it('should increment the count when the increment button is clicked', () => {
    render(<Counter />)

    clickOnIncrementBtn()
    expect(screen.getByText(/1/i)).toBeInTheDocument()

    clickOnIncrementBtn()
    expect(screen.getByText(/2/i)).toBeInTheDocument()
  })

  it('should decrement the count when the decrement button is clicked', () => {
    render(<Counter />)

    clickOnDecrementBtn()
    expect(screen.getByText(/-1/i)).toBeInTheDocument()

    clickOnDecrementBtn()
    expect(screen.getByText(/-2/i)).toBeInTheDocument()
  })

  it('should increment and decrement the count when the increment and decrement buttons are clicked', () => {
    render(<Counter />)

    clickOnIncrementBtn() // 1
    clickOnIncrementBtn() // 2
    expect(screen.getByText(/2/i)).toBeInTheDocument()

    clickOnDecrementBtn() // 1
    clickOnDecrementBtn() // 0
    clickOnDecrementBtn() // -1
    clickOnDecrementBtn() // -2
    expect(screen.getByText(/-2/i)).toBeInTheDocument()
  })
})

function getIncrementBtn() {
  return screen.getByRole('button', { name: /increment/i })
}

function getDecrementBtn() {
  return screen.getByRole('button', {
    name: /decrement/i,
  })
}

function clickOnIncrementBtn() {
  userEvent.click(getIncrementBtn())
}

function clickOnDecrementBtn() {
  userEvent.click(getDecrementBtn())
}
