import { FunctionComponent, useEffect, useState } from 'react'
// utilities
import { db } from '../../../config/firebase.config'
import { collection, query, getDocs, where } from 'firebase/firestore'
// types
import Category from '../../types/category.types'
// components
import ProductItem from '../product-item/ProductItem'
import { BiChevronLeft } from 'react-icons/bi'
// styles
import { CategoryTitle, Container, IconContainer, ProductsContainer } from './categoryDetails.styled'
import { useNavigate } from 'react-router-dom'

interface IcategoryDetailsProps {
  categoryId: string
}

const CategoryDetails: FunctionComponent<IcategoryDetailsProps> = ({ categoryId }) => {
  const [category, setCategory] = useState<Category | null>(null)

  useEffect(() => {
    const getCategoryFromFirestore = async () => {
      try {
        const querysnapshot = await getDocs(query(collection(db, 'categories'), where('id', '==', categoryId)))
        const categoryFromFirestore = querysnapshot.docs[0]?.data()
        setCategory(categoryFromFirestore as any)
      } catch (error) {
        console.log(error)
      }
    }
    void getCategoryFromFirestore()
  }, [])
  const navigate = useNavigate()
  const handleBackPage = () => {
    navigate('/')
  }
  return (
    <Container>
      <CategoryTitle>
        <IconContainer onClick={handleBackPage}>
          <BiChevronLeft size={36}/>
        </IconContainer>
        <p>Explorar {category?.displayName}</p>
      </CategoryTitle>
      <ProductsContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product}/>
        ))}
      </ProductsContainer>

    </Container>
  )
}

export default CategoryDetails
