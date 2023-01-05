//  styles
import './App.css'
// libs
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FunctionComponent } from 'react'
// pages
import Home from './pages/home/Home'
import LoginPage from './pages/login/LoginPage'
import SignUp from './pages/signUp/SignUp'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase.config'

const App: FunctionComponent = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
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
