import { CartContainer, CartEscapeArea, CartTitle, CartContent, CartTotal } from './cart.styled'

import React, { FunctionComponent, useContext } from 'react'
import CustomButton from '../button/Custombutton'
import { Cartcontext } from '../../contexts/cart.context'
import { BsCartCheck } from 'react-icons/bs'
import CartItem from '../cart-item/CartItem'

const Cart: FunctionComponent = () => {
  const { isVisible, toogleCart, products, productTotalPrice } = useContext(Cartcontext)
  return (
    <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toogleCart}/>
        <CartContent>
          <CartTitle>Seu carrinho</CartTitle>
            {products.map((product) => (
              <CartItem key={product.id} product={product}/>
            ))}
          <CartTotal> R$ {productTotalPrice} </CartTotal>
          <CustomButton startIcon={<BsCartCheck/>}>ir para checkout</CustomButton>
        </CartContent>
    </CartContainer>
  )
}

export default Cart
