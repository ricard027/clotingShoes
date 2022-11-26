import { BrowserRouter, Route, Routes } from 'react-router-dom'
//  components
import Home from './pages/home/home.page'
import { FunctionComponent } from 'react'
//  styles
import './App.css'

interface AppProps {
  message?: String
}

const App: FunctionComponent<AppProps> = ({ message }) => {
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
