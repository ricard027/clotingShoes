import './categories.css'
import Category from '../types/category.types'
import { useEffect, useState } from 'react'
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
    <div className='categories-container'>
      <div className="categories-content">
        {categories.map(categorieItem => (
          <Categorieitem category={categorieItem} key={categorieItem.id}/>
        ))}
      </div>
    </div>
  )
}

export default Categories
