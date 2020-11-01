'use strict'
import App from './app'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"')
  )
}

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('[data-js="app"')
)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
