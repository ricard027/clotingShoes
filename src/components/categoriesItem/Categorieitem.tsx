import { FunctionComponent } from 'react'
import Category from '../../types/category.types'
import { Categoryitem } from './categoryitem.styles'

interface CategoryProps {
  category: Category
}// style={{ backgroundImage: `url('${category.imageUrl}')` }}

const categorieItem: FunctionComponent<CategoryProps> = ({ category }) => {
  return (
    <Categoryitem backgroundImage={category.imageUrl}>
       <div className="category-name">
         <p>{category.displayName}</p>
         <p>Explorar</p>
       </div>
       <span className='category-blur active'></span>

    </Categoryitem>
  )
}

export default categorieItem
