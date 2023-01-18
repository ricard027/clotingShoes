
import { FunctionComponent, useContext, useEffect } from 'react'

// styles
import { Container } from './category.steyled'

// utilities
import { CategoryContext } from '../../contexts/category.context'

const CategoryOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      void fetchCategories()
    }
  }, [])
  return (
    <Container>
        {categories.map((category) => (
         <p key={category.id}>{category.name}</p>
        ))}
    </Container>
  )
}

export default CategoryOverview
