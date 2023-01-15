import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
// Components
import CustomButton from '../../components/button/Custombutton'
import CustomInput from '../../components/input/CustomInput'
import Header from '../../components/header/header'
import InputErrorMessageContainer from '../../components/input/InputErrorMessageContainer'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import { signInWithEmailAndPassword, AuthError, AuthErrorCodes, signInWithPopup } from 'firebase/auth'
import { auth, db, googleProvider } from '../../../config/firebase.config'

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './loginPage.style'

import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/user.context'

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm<LoginForm>()

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      const credentialUser = await signInWithEmailAndPassword(auth, data.email, data.password)
      console.log(credentialUser)
    } catch (error) {
      const _error = error as AuthError
      console.log(_error)
      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) { return setError('password', { type: 'wrongPassword' }) }
      if (_error.code === AuthErrorCodes.USER_DELETED) { return setError('email', { type: 'emailNotExist' }) }
    }
  }

  const handleGoogleSubmitPress = async () => {
    try {
      const credentialUser = await signInWithPopup(auth, googleProvider)
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', credentialUser.user.uid)))
      console.log({ credentialUser })
      const user = querySnapshot.docs[0]?.data()

      if (!user) {
        await addDoc(collection(db, 'users'), {
          id: credentialUser.user.uid,
          email: credentialUser.user.email,
          name: credentialUser.user.displayName?.split(' ')[0],
          lastName: credentialUser.user.displayName?.split(' ')[1],
          provider: 'google'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (<>

    <Header />

    <LoginContainer>
      <LoginContent>
        <LoginHeadline>Entre com a sua conta</LoginHeadline>

        <CustomButton startIcon={<BsGoogle size={18} />} onClick={() => handleGoogleSubmitPress()}>
          Entrar com o Google
        </CustomButton>

        <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

        <LoginInputContainer>
          <p>E-mail</p>

          <CustomInput placeholder="Digite seu e-mail"
          { ...register('email', {
            required: true,
            validate: (value) => {
              return validator.isEmail(value)
            }
          })}
          hasError={!!errors?.email}/>
          {errors?.email?.type === 'required' && <InputErrorMessageContainer>o email é obrigatório</InputErrorMessageContainer>}
          {errors?.email?.type === 'validate' && <InputErrorMessageContainer>Por favor informe um email válido</InputErrorMessageContainer>}
          {errors?.email?.type === 'emailNotExist' && <InputErrorMessageContainer> Este e-mail não existe</InputErrorMessageContainer>}
        </LoginInputContainer>

        <LoginInputContainer>
          <p>Senha</p>

          <CustomInput placeholder="Digite sua senha" type="password"
          { ...register('password', { required: true })}
          hasError={!!errors?.password}/>
          {errors?.password?.type === 'required' && <InputErrorMessageContainer>a senha é obrigatória</InputErrorMessageContainer>}
          {errors?.password?.type === 'wrongPassword' && <InputErrorMessageContainer> senha inválida</InputErrorMessageContainer>}

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
