import { useEffect, useContext } from 'react'

// components
import { BeatLoader } from 'react-spinners'
import Categorieitem from '../categoriesItem/Categorieitem'

// styles
import Colors from '../../theme/theme.colors'
import { CustomCategoty } from './categories.styles'

// utilities
import { CategoryContext } from '../../contexts/category.context'

const Categories = () => {
  const { categories, fetchCategories, loading } = useContext(CategoryContext)

  useEffect(() => {
    void fetchCategories()
  }, [])
  return (
    <CustomCategoty>
      {loading && <BeatLoader color={Colors.primary} className='loader'/>}
      <div className="categories-content">
        {categories.map(categorieItem => (
          <Categorieitem category={categorieItem} key={categorieItem.id}/>
        ))}
      </div>
    </CustomCategoty>
  )
}

export default Categories
