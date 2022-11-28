import React, { FunctionComponent } from 'react'
import Category from '../../types/category.types'
import './categorieItem.css'

interface CategoryProps {
  category: Category
}

const categorieItem: FunctionComponent<CategoryProps> = ({ category }) => {
  return (
    <div className='category-item ' style={{ backgroundImage: `url('${category.imageUrl}')` }}>
       <div className="category-name">
         <p>{category.displayName}</p>
         <p>Explorar</p>
       </div>
       <span className='category-blur active'></span>

    </div>
  )
}

export default categorieItem
