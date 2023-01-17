import { collection, getDocs } from 'firebase/firestore'
import { createContext, FunctionComponent, useState } from 'react'
import { db } from '../../config/firebase.config'
import Category from '../types/category.types'

interface IcategoryContext {
  categories: Category[]
  loading: Boolean
  fetchCategories: () => Promise<void>
}

export const CategoryContext = createContext<IcategoryContext>({
  categories: [],
  loading: false,
  fetchCategories: () => Promise.resolve()
})

const CategoriContextProvider: FunctionComponent<any> = ({ children }) => {
  const [loading, setIsloading] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      setIsloading(true)
      const docFromFirestore: Category[] = []

      const querySnapshot = await getDocs(collection(db, 'categories'))

      querySnapshot.forEach((doc: any) => {
        docFromFirestore.push(doc.data())
      })

      setCategories(docFromFirestore)
    } catch (error) {
      console.log(error)
    } finally {
      setIsloading(false)
    }
  }
  return (
    <CategoryContext.Provider value={{ categories, fetchCategories, loading }}>
    {children}
    </CategoryContext.Provider>
  )
}

export default CategoriContextProvider
