//  styles
import './App.css'

// libs
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FunctionComponent, useContext, useState } from 'react'

// pages
import Home from './pages/home/Home'
import LoginPage from './pages/login/LoginPage'
import SignUp from './pages/signUp/SignUp'

// utilities
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../config/firebase.config'

import { UserContext } from './contexts/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ExplorerPage from './pages/explorer/Explorer'

const App: FunctionComponent = () => {
  const [initiaLising, setIsInitializing] = useState(true)

  const { isAuthenticated, logoutUser, loginUser } = useContext(UserContext)

  console.log(isAuthenticated)
  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAuthenticated && !user
    if (isSigninOut) {
      logoutUser()
      return setIsInitializing(false)
    }
    const isSignIn = !isAuthenticated && user
    if (isSignIn) {
      const querySnapShot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))
      const userFromFireStore = querySnapShot.docs[0]?.data()
      loginUser(userFromFireStore as any)
      return setIsInitializing(false)
    }
    return setIsInitializing(false)
  })

  if (initiaLising) return null

  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/explorer' element={<ExplorerPage/>}/>
             <Route path='login' element={<LoginPage/>}/>
             <Route path='create-acount' element={<SignUp/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
