// styles

import { CustomHeader } from './header.style'
// libs
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { signOut } from 'firebase/auth'
import { auth } from '../../../config/firebase.config'

const Header = () => {
  const navigate = useNavigate()

  const getLoginPage = () => {
    navigate('/login')
  }
  const getExplorerPage = () => {
    navigate('/')
  }
  const getCreateAcountPage = () => {
    navigate('/create-acount')
  }
  return (
    <CustomHeader>
     <div className="logo">
        Cloting Store
     </div>
     <ul className='listHeader'>
        <li className='itemListHeader' onClick={getExplorerPage}>Explorar</li>
        <li className='itemListHeader' onClick={getLoginPage}>Login</li>
        <li className='itemListHeader' onClick={getCreateAcountPage}>Criar Conta</li>
        <li className='itemListHeader' onClick={() => signOut(auth)}>sair</li>
        <li className='itemListHeader cart'>
            <FiShoppingCart />
            <span className='qtdCart'>+99</span>
        </li>
     </ul>
    </CustomHeader>
  )
}

export default Header
