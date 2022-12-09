import React, { FunctionComponent } from 'react'
import { InputErrorMessage } from './inputMessage.style'

interface Iprops {
  children: React.ReactNode
}

const InputErrorMessageContainer: FunctionComponent<Iprops> = ({ children }) => {
  return (
    <InputErrorMessage>
       { children }
    </InputErrorMessage>
  )
}

export default InputErrorMessageContainer
