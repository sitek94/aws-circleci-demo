import * as React from 'react'
import GithubCorner from '@uiw/react-github-corners'

import pkg from '../../package.json'
import logo from '../logo.svg'
import './App.css'

import { Counter } from '../Counter'

export function App() {
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
        <Counter />
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="app-link-react"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="app-link-vite"
          >
            Vite Docs
          </a>
        </p>
      </main>
    </div>
  )
}
