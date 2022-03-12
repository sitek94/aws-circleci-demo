import pkg from '../package.json'
import logo from './logo.svg'
import './App.css'

import * as React from 'react'
import GithubCorner from '@uiw/react-github-corners'

export function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <GithubCorner
        target="_blank"
        href={pkg.repository.url}
        color="var(--color-gray)"
        bgColor="var(--color-blue)"
        position="right"
      />
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 data-cy="app-title">
          {pkg.name} v{pkg.version}
        </h1>
        <p>
          <button
            type="button"
            onClick={() => setCount(count => count + 1)}
            data-cy="counter-btn"
          >
            count is: {count}
          </button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </main>
    </div>
  )
}
