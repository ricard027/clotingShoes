import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'

// Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styled'

// Utilities
import Product from '../../types/product.types'
import CustomButton from '../button/Custombutton'
import { Cartcontext } from '../../contexts/cart.context'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(Cartcontext)
  return (
    <ProductContainer>
     <ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus/>} onClick={addProductToCart}>adicionar ao carrinho </CustomButton>
     </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
