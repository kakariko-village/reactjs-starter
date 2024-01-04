import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/store'
import { getElementById } from './utils'
import { App } from './App'

const rootElement = getElementById('root')

const app = createRoot(rootElement)

app.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
