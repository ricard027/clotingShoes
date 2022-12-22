// component
import CustomButton from '../../components/button/Custombutton'
import Header from '../../components/header/header'
import CustomInput from '../../components/input/CustomInput'
import { FiLogIn } from 'react-icons/fi'
import { CustomParagraph, SignUpContainer, SignUpContent, SignUpHeadline } from './signUp.style'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import InputErrorMessageContainer from '../../components/input/InputErrorMessageContainer'

interface SignUpForm {
  name: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const Createacount = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit
  } = useForm<SignUpForm>()

  const watchPassword = watch('password')

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
             <CustomInput placeholder='digite seu nome' {...register('name', { required: true })} hasError={!!errors?.name}/>
             {errors?.name?.type === 'required' && <InputErrorMessageContainer>Nome é obrigatório</InputErrorMessageContainer>}
             </SignUpContainer>

             <SignUpContainer>
              <CustomParagraph>Sobrenome</CustomParagraph>
              <CustomInput placeholder='digite seu sobrenome' {...register('lastName', { required: true })} hasError={!!errors?.lastName}/>
              {errors?.lastName?.type === 'required' && <InputErrorMessageContainer>Sobrenome é obrigatório</InputErrorMessageContainer>}

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

             <SignUpContainer>
            <CustomParagraph>Confirmação de Senha</CustomParagraph>
            <CustomInput
              hasError={!!errors?.passwordConfirmation}
              placeholder="Digite novamente sua senha"
              type="password"
              {...register('passwordConfirmation', {
                required: true,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />

            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessageContainer>
                A confirmação de senha é obrigatória.
              </InputErrorMessageContainer>
            )}

            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessageContainer>
                A confirmação de senha precisa ser igual a senha.
              </InputErrorMessageContainer>
            )}
          </SignUpContainer>
             <CustomButton startIcon={<FiLogIn size={18}/>} onClick={() => handleSubmit(handleSubmitPress)()}> Criar conta</CustomButton>

          </SignUpContent>
        </SignUpContainer>
    </>
  )
}

export default Createacount
