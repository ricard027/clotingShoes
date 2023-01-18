import { FunctionComponent } from 'react'
import CategoryOverview from '../../components/categories-overview/CategoryOverview'
import Header from '../../components/header/header'

const ExplorerPage: FunctionComponent = () => {
  return (
   <>
   <Header/>
   <CategoryOverview/>
   </>
  )
}

export default ExplorerPage
