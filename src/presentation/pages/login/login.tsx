import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases'
import { Link, useNavigate } from 'react-router-dom'
import { SaveAccessToken } from '@/domain/usecases/save-access-token'

type StateProps = {
  isLoading: boolean
  errorMessage: string
  email: string
  password: string
  emailError: string
  passwordError: string
}

type Props = {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}

const Login: React.FC<Props> = ({ validation, authentication, saveAccessToken }: Props) => {
  const [state, setState] = useState<StateProps>({
    isLoading: false,
    errorMessage: '',
    email: '',
    password: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
  })
  const navigate = useNavigate()

  useEffect(() => {
    validation?.validate('email', [state.email])
  }, [state.email])

  useEffect(() => {
    validation?.validate('password', [state.password])
  }, [state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading) return
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({ email: state.email, password: state.password })
      saveAccessToken.save(account.accessToken)
      navigate('/')
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        errorMessage: error.message,
      })
    }
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button data-testid="submit" type="submit" className={Styles.submit}>
            Entrar
          </button>
          <Link to="/signup" data-testid="signup" className={Styles.link}>
            Criar conta
          </Link>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
