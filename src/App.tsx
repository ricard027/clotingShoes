//  components
import { FunctionComponent } from 'react'
import Header from './components/Header.component'
//  styles
import './App.css'

interface AppProps {
  message?: String
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div className="App">
      <Header/>
    </div>
  )
}

export default App
