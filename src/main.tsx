import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import UserContextProvider from './contexts/user.context'
import CategoriContextProvider from './contexts/category.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <CategoriContextProvider>
        <App />
      </CategoriContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)
