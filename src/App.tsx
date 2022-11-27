import { BrowserRouter, Route, Routes } from 'react-router-dom'
//  components
import Home from './pages/home/Home'
import { FunctionComponent } from 'react'
//  styles
import './App.css'

const App: FunctionComponent = () => {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
