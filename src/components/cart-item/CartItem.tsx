import { FunctionComponent, useContext } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { Cartcontext } from '../../contexts/cart.context'

// Utilities
import CartProduct from '../../types/cart.types'

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cartItem.styled'

interface CartItemProps {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const { removeItemFromCart, increaseQuantity, decreaseQuantity } = useContext(Cartcontext)

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={() => decreaseQuantity(product.id)}/>
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={() => increaseQuantity(product.id)} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={() => removeItemFromCart(product.id)}>
        <AiOutlineClose size={25} />
      </RemoveButton >
    </CartItemContainer>
  )
}

export default CartItem
