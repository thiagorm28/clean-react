import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import { Login } from '@/presentation/pages'
import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/build/validation-builder'
import React from 'react'

export const makeLogin: React.FC = () => {
  const url = 'fake.url.com/login'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = new ValidationComposite([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().minLenght(5).build(),
  ])

  return <Login authentication={remoteAuthentication} validation={validationComposite} />
}
