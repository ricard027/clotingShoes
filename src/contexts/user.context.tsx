import { createContext, FunctionComponent, useState } from 'react'

const userContext = createContext({
  currentUser: null
})
interface Props {
  children: React.ReactNode
}

const UserContextProvider: FunctionComponent <Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  setCurrentUser('teste' as any)
  return (
    <userContext.Provider value={{ currentUser }}>
        { children }
    </userContext.Provider>
  )
}

export default UserContextProvider
