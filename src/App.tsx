// Styles
import './App.css'

// Pages
import Home from './pages/home/Home'
import LoginPage from './pages/login/LoginPage'
import SignUp from './pages/signUp/SignUp'
import CategoryDetailsPage from './pages/categoryDetailsPage/CategoryDetailsPage'
import ExplorerPage from './pages/explorer/Explorer'
import CheckoutPage from './pages/checkout/CheckoutPage'
// Components
import Cart from './components/cart/Cart.component'

// Utilities
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../config/firebase.config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { FunctionComponent, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

const App: FunctionComponent = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const [initiaLising, setIsInitializing] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigninOut = isAuthenticated && !user
      if (isSigninOut) {
        dispatch({ type: 'LOGOUT_USER' })
        return setIsInitializing(false)
      }
      const isSignIn = !isAuthenticated && user
      if (isSignIn) {
        const querySnapShot = await getDocs(
          query(collection(db, 'users'), where('id', '==', user.uid))
        )
        const userFromFireStore = querySnapShot.docs[0]?.data()
        dispatch({ type: 'LOGIN_USER', payload: userFromFireStore })
        return setIsInitializing(false)
      }
      return setIsInitializing(false)
    })
  }, [dispatch])

  if (initiaLising) return null

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<ExplorerPage />} />
          <Route path="/category/:id" element={<CategoryDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="create-acount" element={<SignUp />} />
        </Routes>
        <Cart />
      </BrowserRouter>
    </div>
  )
}

export default App
