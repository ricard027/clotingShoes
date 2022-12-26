//  styles
import './App.css'
// libs
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FunctionComponent } from 'react'
// pages
import Home from './pages/home/Home'
import LoginPage from './pages/login/LoginPage'
import SignUp from './pages/signUp/SignUp'

const App: FunctionComponent = () => {
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
