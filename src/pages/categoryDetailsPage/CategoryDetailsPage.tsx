import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import CategoryDetails from '../../components/categoryDetails/CategoryDetails'
import Header from '../../components/header/header'

const CategoryDetailsPage: FunctionComponent = () => {
  const { id } = useParams()
  if (!id) return null

  return (
    <>
    <Header/>
    <CategoryDetails categoryId={id}/>
    </>
  )
}

export default CategoryDetailsPage
