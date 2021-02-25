import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { HashRouter as Router} from 'react-router-dom'
import App from './App'

test('App render test', () => {
  // В документации Jest теперь есть "официальный" обходной путь
  // поскольку JSDOM не поддерживает, window.matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(
    <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  )
})