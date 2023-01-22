import { CartContainer, CartEscapeArea, CartTitle, CartContent, CartTotal } from './cart.styled'

import React, { FunctionComponent, useContext } from 'react'
import CustomButton from '../button/Custombutton'
import { Cartcontext } from '../../contexts/cart.context'
import { BsCartCheck } from 'react-icons/bs'

const Cart: FunctionComponent = () => {
  const { isVisible, toogleCart } = useContext(Cartcontext)
  return (
    <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toogleCart}/>
        <CartContent>
          <CartTitle>Seu carrinho</CartTitle>
          <CartTotal> R$ 99.99</CartTotal>
          <CustomButton startIcon={<BsCartCheck/>}>ir para checkout</CustomButton>
        </CartContent>
    </CartContainer>
  )
}

export default Cart
