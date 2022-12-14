// component
import CustomButton from '../../components/button/Custombutton'
import Header from '../../components/header/header'
import CustomInput from '../../components/input/CustomInput'
import { FiLogIn } from 'react-icons/fi'
import { SignUpContainer, SignUpContent, SignUpHeadline } from './signUp.style'
const Createacount = () => {
  return (
    <>
        <Header/>

        <SignUpContainer >
          <SignUpContent>
              <SignUpHeadline> Crie sua conta </SignUpHeadline>

             <SignUpContainer >
             <p>Nome</p>
             <CustomInput placeholder='digite seu nome'/>
             </SignUpContainer>

             <SignUpContainer>
              <p>Sobrenome</p>
              <CustomInput placeholder='digite seu sobrenome'/>
             </SignUpContainer>

             <SignUpContainer>
              <p>Email</p>
              <CustomInput placeholder='digite seu email'/>
             </SignUpContainer>

             <SignUpContainer>
              <p>Senha</p>
              <CustomInput placeholder='digite sua senha' type='password'/>
             </SignUpContainer>

             <CustomButton startIcon={<FiLogIn size={18}/>}> Criar conta</CustomButton>

          </SignUpContent>
        </SignUpContainer>
    </>
  )
}

export default Createacount
