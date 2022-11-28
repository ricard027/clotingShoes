import React, { FunctionComponent } from 'react'
import Category from '../types/category.types'
import './categorieItem.css'

interface CategoryProps {
  category: Category
}

const categorieItem: FunctionComponent<CategoryProps> = ({ category }) => {
  return (
    <div className='category-item'>
       <p>{category.displayName}</p>
       <p>Explorar</p>
    </div>
  )
}

export default categorieItem
