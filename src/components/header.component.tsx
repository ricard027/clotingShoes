import './header.css'
import { FiShoppingCart } from 'react-icons/fi'

const Header = () => {
  return (
    <header className='headerComponent'>
     <div className="logo">
        ClotingShoes
     </div>
     <ul className='listHeader'>
        <li className='itemListHeader'>Explorar</li>
        <li className='itemListHeader'>Login</li>
        <li className='itemListHeader'>Criar Conta</li>
        <li className='itemListHeader cart'>
            <FiShoppingCart />
            <span className='qtdCart'>+99</span>
        </li>
     </ul>
    </header>
  )
}

export default Header
