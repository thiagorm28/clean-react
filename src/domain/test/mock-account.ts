import { AddAccountParams, AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '../models'
import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.word(),
})

export const mockAddAccount = (): AddAccountParams => {
  const password = faker.internet.password()
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: password,
    passwordConfirmation: password,
  }
}
