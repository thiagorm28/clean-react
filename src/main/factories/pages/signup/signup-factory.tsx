import { SignUp } from '@/presentation/pages'
import React from 'react'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeRemoteAddAccount } from '../../usecases/add-account/remote-add-account'

export const makeSignUp: React.FC = () => {
  return <SignUp validation={makeSignUpValidation()} addAccount={makeRemoteAddAccount()} />
}
