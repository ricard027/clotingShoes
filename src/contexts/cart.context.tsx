import React, { createContext, FunctionComponent, useEffect, useMemo, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface IcartContext {
  products: CartProduct[]
  isVisible: boolean
  productsTotalPrice: number
  productCount: number
  toogleCart: () => void
  addProductToCart: (product: Product) => void
  removeItemFromCart: (productId: string) => void
  increaseQuantity: (Product: string) => void
  decreaseQuantity: (Product: string) => void
}

interface CartcontextProps {
  children: React.ReactNode
}

export const Cartcontext = createContext<IcartContext>({
  products: [],
  isVisible: false,
  productsTotalPrice: 0,
  productCount: 0,
  toogleCart: () => {},
  addProductToCart: () => {},
  removeItemFromCart: (productId) => { },
  increaseQuantity: (productId) => { },
  decreaseQuantity: (productId) => { }
})

const CartContextProvider: FunctionComponent<CartcontextProps> = ({ children }) => {
  const LOCAL_STORAGE_KEY = 'cartProducts'
  const [isVisible, setIsvisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!) || []
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products))
  }, [products])

  const productsTotalPrice = useMemo(() => {
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
    <Cartcontext.Provider value={{ isVisible, products, toogleCart, addProductToCart, removeItemFromCart, increaseQuantity, decreaseQuantity, productsTotalPrice, productCount }}>
      {children}
    </Cartcontext.Provider>
  )
}

export default CartContextProvider
