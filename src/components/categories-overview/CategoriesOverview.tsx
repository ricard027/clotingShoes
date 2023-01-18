
import { FunctionComponent, useContext, useEffect } from 'react'
import CategoryOverview from '../category-overview/CategoryOverview'
// styles
import { Container } from './categories.styled'

// utilities
import { CategoryContext } from '../../contexts/category.context'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      void fetchCategories()
    }
  }, [])
  return (
    <Container>
       {categories.map((category) => (
          <CategoryOverview category={category} key={category.id}/>
       ))}
    </Container>
  )
}

export default CategoriesOverview
