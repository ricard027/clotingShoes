import { createContext, FunctionComponent, useMemo, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface IcartContext {
  products: CartProduct[]
  isVisible: boolean
  productTotalPrice: number
  productCount: number
  toogleCart: () => void
  addProductToCart: (product: Product) => void
  removeItemFromCart: (productId: string) => void
  increaseQuantity: (Product: string) => void
  decreaseQuantity: (Product: string) => void
}

export const Cartcontext = createContext<IcartContext>({
  products: [],
  isVisible: false,
  productTotalPrice: 0,
  productCount: 0,
  toogleCart: () => {},
  addProductToCart: () => {},
  removeItemFromCart: (productId) => { },
  increaseQuantity: (productId) => { },
  decreaseQuantity: (productId) => { }
})

const CartContextProvider: FunctionComponent<any> = ({ children }) => {
  const [isVisible, setIsvisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const productTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity
    }, 0)
  }, [products])

  const productCount = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity
    }, 0)
  }, [products])

  const toogleCart = () => {
    setIsvisible(prevState => !prevState)
  }

  const addProductToCart = (product: Product) => {
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

  const removeItemFromCart = (productId: string) => {
    setProducts(product => product.filter(product =>
      product.id !== productId))
  }

  const increaseQuantity = (productId: string) => {
    setProducts(product => product.map(product =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product))
  }

  const decreaseQuantity = (productId: string) => {
    setProducts(product => product.map(product =>
      product.id === productId ? { ...product, quantity: product.quantity - 1 } : product).filter(product => product.quantity > 0))
  }

  return (
    <Cartcontext.Provider value={{ isVisible, products, toogleCart, addProductToCart, removeItemFromCart, increaseQuantity, decreaseQuantity, productTotalPrice, productCount }}>
      {children}
    </Cartcontext.Provider>
  )
}

export default CartContextProvider
