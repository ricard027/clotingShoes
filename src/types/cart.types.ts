import Product from './product.types'

interface CartProduct extends Product {
  quantity: Number
}

export default CartProduct
