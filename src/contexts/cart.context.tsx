import { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.types'

interface IcartContext {
  products: CartProduct[]
  isVisible: boolean
  toogleCart: () => void
}

export const Cartcontext = createContext<IcartContext>({
  products: [],
  isVisible: false,
  toogleCart: () => {}
})

const CartContextProvider: FunctionComponent = ({ children }) => {
  const [isVisible, setIsvisible] = useState(false)
  const [products] = useState<CartProduct[]>([])

  const toogleCart = () => {
    setIsvisible(prevState => !prevState)
  }

  return (
    <Cartcontext.Provider value={{ isVisible, products, toogleCart }}>
      {children}
    </Cartcontext.Provider>
  )
}

export default CartContextProvider
