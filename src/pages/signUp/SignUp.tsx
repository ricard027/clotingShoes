// component
import CustomButton from '../../components/button/Custombutton'
import Header from '../../components/header/header'
import CustomInput from '../../components/input/CustomInput'
import { FiLogIn } from 'react-icons/fi'
import { CustomParagraph, SignUpContainer, SignUpContent, SignUpHeadline } from './signUp.style'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import InputErrorMessageContainer from '../../components/input/InputErrorMessageContainer'

const Createacount = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }
  console.log({ errors })
  return (
    <>
        <Header/>

        <SignUpContainer >
          <SignUpContent>
              <SignUpHeadline> Crie sua conta </SignUpHeadline>

             <SignUpContainer >
             <CustomParagraph>Nome</CustomParagraph>
             <CustomInput placeholder='digite seu nome' {...register('nome', { required: true })} hasError={!!errors?.nome}/>
             {errors?.nome?.type === 'required' && <InputErrorMessageContainer>Nome é obrigatório</InputErrorMessageContainer>}
             </SignUpContainer>

             <SignUpContainer>
              <CustomParagraph>Sobrenome</CustomParagraph>
              <CustomInput placeholder='digite seu sobrenome' {...register('sobrenome', { required: true })} hasError={!!errors?.sobrenome}/>
              {errors?.sobrenome?.type === 'required' && <InputErrorMessageContainer>Sobrenome é obrigatório</InputErrorMessageContainer>}

             </SignUpContainer>

             <SignUpContainer>
              <CustomParagraph>Email</CustomParagraph>
              <CustomInput placeholder='digite seu email' {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })} hasError={!!errors?.email}/>
             {errors?.email?.type === 'required' && <InputErrorMessageContainer> Email é obrigatório</InputErrorMessageContainer>}
             {errors?.email?.type === 'validate' && <InputErrorMessageContainer> Insira um email válido</InputErrorMessageContainer>}
             </SignUpContainer>

             <SignUpContainer>
              <CustomParagraph>Senha</CustomParagraph>
              <CustomInput placeholder='digite sua senha' type='password' {...register('password', { required: true, minLength: 8 })} hasError={!!errors?.password}/>
             {errors?.password?.type === 'required' && <InputErrorMessageContainer>Senha é obrigatório</InputErrorMessageContainer>}
             {errors?.password?.type === 'minLength' && <InputErrorMessageContainer>Senha deve conter no mínimo 8 caracteres</InputErrorMessageContainer>}

             </SignUpContainer>

             <CustomButton startIcon={<FiLogIn size={18}/>} onClick={() => handleSubmit(handleSubmitPress)()}> Criar conta</CustomButton>

          </SignUpContent>
        </SignUpContainer>
    </>
  )
}

export default Createacount
