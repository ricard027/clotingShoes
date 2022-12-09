import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

// Components
import CustomButton from '../../components/button/Custombutton'
import CustomInput from '../../components/input/CustomInput'
import Header from '../../components/header/header'
import InputErrorMessageContainer from '../../components/input/InputErrorMessageContainer'
import { useForm } from 'react-hook-form'

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './loginPage.style'

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  console.log({ errors })
  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  return (<>

    <Header />

    <LoginContainer>
      <LoginContent>
        <LoginHeadline>Entre com a sua conta</LoginHeadline>

        <CustomButton startIcon={<BsGoogle size={18} />}>
          Entrar com o Google
        </CustomButton>

        <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

        <LoginInputContainer>
          <p>E-mail</p>

          <CustomInput placeholder="Digite seu e-mail"
          { ...register('email', { required: true })}
          hasError={!!errors?.email}/>
          {errors?.email?.type === 'required' && <InputErrorMessageContainer>o email é obrigatório</InputErrorMessageContainer>}
        </LoginInputContainer>

        <LoginInputContainer>
          <p>Senha</p>

          <CustomInput placeholder="Digite sua senha"
          { ...register('password', { required: true })}
          hasError={!!errors?.password}/>
          {errors?.password?.type === 'required' && <InputErrorMessageContainer>a senha é obrigatória</InputErrorMessageContainer>}

        </LoginInputContainer>

        <CustomButton startIcon={<FiLogIn size={18} />}
                      onClick={() => handleSubmit(handleSubmitPress)()}>
         Entrar</CustomButton>
      </LoginContent>
    </LoginContainer>
  </>
  )
}
export default LoginPage
