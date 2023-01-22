import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import Category from '../../types/category.types'
import { Categoryitem } from './categoryitem.styles'

interface CategoryProps {
  category: Category
}// style={{ backgroundImage: `url('${category.imageUrl}')` }}

const categorieItem: FunctionComponent<CategoryProps> = ({ category }) => {
  const navigate = useNavigate()
  const handleExplorerClick = () => {
    navigate(`category/${category.id}`)
  }
  return (
    <Categoryitem backgroundImage={category.imageUrl}>
       <div className="category-name" onClick={handleExplorerClick}>
         <p>{category.displayName}</p>
         <p>Explorar</p>
       </div>
       <span className='category-blur active'></span>

    </Categoryitem>
  )
}

export default categorieItem
