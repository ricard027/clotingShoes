import { FunctionComponent, useContext, useEffect } from 'react'
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
import { UserContext } from '../../contexts/user.context'
import { useNavigate } from 'react-router-dom'

const Checkout: FunctionComponent = () => {
  const navigate = useNavigate()
  const { products, productsTotalPrice } = useContext(Cartcontext)
  const { isAuthenticated } = useContext(UserContext)

  useEffect(() => {
    !isAuthenticated &&
     navigate('/login')
  }, [isAuthenticated])

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
