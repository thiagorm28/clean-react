import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import { AddAccount, AddAccountParams } from '@/domain/usecases'

export class AddAccountSpy implements AddAccount {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  account = mockAccountModel()
  callsCount = 0

  async add(params: AddAccountParams): Promise<AccountModel> {
    this.name = params.name
    this.email = params.email
    this.password = params.password
    this.passwordConfirmation = params.passwordConfirmation
    this.callsCount++
    return this.account
  }
}
