import React, { FunctionComponent, InputHTMLAttributes } from 'react'

// Styles
import { CustomInputContainer } from './input.style'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputProps> = React.forwardRef(
  (props, ref) => {
    return <CustomInputContainer {...props} ref={ref} />
  }
)
CustomInput.displayName = 'CustomInput'

export default CustomInput
