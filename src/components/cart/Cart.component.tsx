import { CartContainer, CartEscapeArea, CartTitle, CartContent, CartTotal } from './cart.styled'

import React, { FunctionComponent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../button/Custombutton'
import { Cartcontext } from '../../contexts/cart.context'
import { BsCartCheck } from 'react-icons/bs'
import { TbMoodEmpty } from 'react-icons/tb'
import CartItem from '../cart-item/CartItem'

const Cart: FunctionComponent = () => {
  const { isVisible, toogleCart, products, productsTotalPrice } = useContext(Cartcontext)
  const navigate = useNavigate()

  const toCheckoutFunction = () => {
    navigate('/checkout')
    toogleCart()
  }
  return (
    <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toogleCart}/>
        <CartContent>
            {products.length === 0 ? <CartTitle>Seu carrinho esta vazio!  <TbMoodEmpty size={20}/></CartTitle> : <CartTitle>Seu carrinho</CartTitle>}
            {products.map((product) => (
              <CartItem key={product.id} product={product}/>
            ))}

            {products.length > 0 &&
            <>
               <CartTotal> R$ {productsTotalPrice} </CartTotal>
               <CustomButton startIcon={<BsCartCheck/>} onClick={toCheckoutFunction}>ir para checkout</CustomButton>
            </>}

        </CartContent>
    </CartContainer>
  )
}

export default Cart
