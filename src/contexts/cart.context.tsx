import { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.types'

interface IcartContext {
  products: CartProduct[]
  isVisible: boolean
  toogleCart: () => void
  addProductToCart: () => void
}

export const Cartcontext = createContext<IcartContext>({
  products: [],
  isVisible: false,
  toogleCart: () => {},
  addProductToCart: () => {}
})

const CartContextProvider: FunctionComponent = ({ children }) => {
  const [isVisible, setIsvisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toogleCart = () => {
    setIsvisible(prevState => !prevState)
  }

  const addProductToCart = (product) => {
    const productIsAlread = products.some((item) => (
      item.id === product.id
    ))

    if (productIsAlread) {
      return setProducts(products => products.map(item => (
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )))
    }

    setProducts((prevstate) => [...prevstate, { ...product, quantity: 1 }])
  }

  return (
    <Cartcontext.Provider value={{ isVisible, products, toogleCart, addProductToCart }}>
      {children}
    </Cartcontext.Provider>
  )
}

export default CartContextProvider
