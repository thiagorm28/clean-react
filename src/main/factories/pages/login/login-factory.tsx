import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import React from 'react'
import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'
import { makeSaveAccessToken } from '@/main/factories/usecases/save-access-token/save-access-token-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      saveAccessToken={makeSaveAccessToken()}
    />
  )
}
