import * as React from 'react'

export function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)

  return (
    <div className="Counter">
      <button
        type="button"
        onClick={increment}
        aria-label="Increment"
        data-cy="counter-increment-btn"
      >
        <span role="img" aria-label="Plus sign">
          ➕
        </span>
      </button>
      <span data-cy="counter-value">{count}</span>
      <button
        type="button"
        onClick={decrement}
        aria-label="Decrement"
        data-cy="counter-decrement-btn"
      >
        <span role="img" aria-label="Minus sign">
          ➖
        </span>
      </button>
    </div>
  )
}
