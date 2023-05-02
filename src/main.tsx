import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// styles
import './index.css'
// utilities
import { Provider } from 'react-redux'
import CategoriContextProvider from './contexts/category.context'
import CartContextProvider from './contexts/cart.context'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CategoriContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CategoriContextProvider>
    </Provider>
  </React.StrictMode>
)
