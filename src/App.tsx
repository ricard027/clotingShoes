//  styles
import './App.css'

// libs
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FunctionComponent, useContext } from 'react'

// pages
import Home from './pages/home/Home'
import LoginPage from './pages/login/LoginPage'
import SignUp from './pages/signUp/SignUp'

// utilities
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../config/firebase.config'

import { UserContext } from './contexts/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore'

const App: FunctionComponent = () => {
  const { isAuthenticated, logoutUser, loginUser } = useContext(UserContext)

  console.log(isAuthenticated)
  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAuthenticated && !user
    if (isSigninOut) {
      return logoutUser()
    }
    const isSignIn = !isAuthenticated && user
    if (isSignIn) {
      const querySnapShot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))
      const userFromFireStore = querySnapShot.docs[0]?.data()
      return loginUser(userFromFireStore as any)
    }
  })
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='login' element={<LoginPage/>}/>
             <Route path='create-acount' element={<SignUp/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
