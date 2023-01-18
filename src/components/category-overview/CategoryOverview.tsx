import { FunctionComponent } from 'react'
import Category from '../../types/category.types'
import ProductItem from '../product-item/ProductItem'
import { CategoryContainer, CategoryTitle, ProductsContainer } from './categoryOverviwe.styled'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({ category }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>
        {category.displayName}
      </CategoryTitle>
      <ProductsContainer>
        {category.products.slice(0, 3).map((product) => (
           <ProductItem key={product.id} product={product}/>
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
