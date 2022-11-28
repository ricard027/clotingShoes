import { useEffect, useState } from 'react'
// components
import { CustomCategoty } from './categories.styles'
import Category from '../../types/category.types'
import axios from 'axios'
import Categorieitem from '../categoriesItem/Categorieitem'
const url = import.meta.env.VITE_API_URL

const Categories = () => {
  const [categories, setCategoties] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${url}/api/category`)
      setCategoties(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    void fetchCategories()
  }, [])

  return (
    <CustomCategoty>
      <div className="categories-content">
        {categories.map(categorieItem => (
          <Categorieitem category={categorieItem} key={categorieItem.id}/>
        ))}
      </div>
    </CustomCategoty>
  )
}

export default Categories
