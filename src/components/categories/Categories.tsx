import { useEffect, useState } from 'react'
// components
import { CustomCategoty } from './categories.styles'
import Category from '../../types/category.types'
import { BeatLoader } from 'react-spinners'
import axios from 'axios'
import Categorieitem from '../categoriesItem/Categorieitem'
import Colors from '../../theme/theme.colors'
const url = import.meta.env.VITE_API_URL

const Categories = () => {
  const [loading, setLoading] = useState(false)
  const [categories, setCategoties] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${url}/api/category`)
      setCategoties(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    void fetchCategories()
  }, [])

  return (
    <CustomCategoty>
      <BeatLoader loading={loading} color={Colors.primary} className='loader'/>
      <div className="categories-content">
        {categories.map(categorieItem => (
          <Categorieitem category={categorieItem} key={categorieItem.id}/>
        ))}
      </div>
    </CustomCategoty>
  )
}

export default Categories
