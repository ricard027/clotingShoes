import { useEffect, useContext } from 'react'

// components
import Categorieitem from '../categoriesItem/Categorieitem'

// styles
import { CustomCategoty } from './categories.styles'

// utilities
import { CategoryContext } from '../../contexts/category.context'
import LoadingComponent from '../loading/loading.component'

const Categories = () => {
  const { categories, fetchCategories, loading } = useContext(CategoryContext)

  useEffect(() => {
    void fetchCategories()
  }, [])
  return (
    <CustomCategoty>
      <div className="categories-content">
        {loading
          ? <LoadingComponent/>
          : categories.map(categorieItem => (
          <Categorieitem category={categorieItem} key={categorieItem.id}/>
          ))}
      </div>
    </CustomCategoty>
  )
}

export default Categories
