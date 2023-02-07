import { FunctionComponent, useContext } from 'react'
import { BsBagCheck } from 'react-icons/bs'

import { Cartcontext } from '../../contexts/cart.context'
import CartItem from '../cart-item/CartItem'
import CustomButton from '../button/Custombutton'

import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutProducts,
  CheckoutTotal
} from './checkout.styles'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(Cartcontext)

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0
        ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

          <CustomButton startIcon={<BsBagCheck />}>
            Finalizar Compra
          </CustomButton>
        </>
          )
        : (
        <p>Seu carrinho está vazio!</p>
          )}
    </CheckoutContainer>
  )
}

export default Checkout
