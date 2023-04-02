import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react'
import { ValidationSpy, AuthenticationSpy, SaveAccessToken } from '@/presentation/test'
import { faker } from '@faker-js/faker'
import { InvalidCredentialsError } from '@/domain/errors'
import 'jest-localstorage-mock'
import SignUp from './signup'
import { AddAccountSpy } from '@/presentation/test/mock-add-account'

type SutTypes = {
  sut: RenderResult
  addAccountSpy: AddAccountSpy
}

type SutParams = {
  validationError: string
}

const history = createMemoryHistory({ initialEntries: ['/login'] })
const makeSut = (params?: SutParams): SutTypes => {
  const validationSpy = new ValidationSpy()
  const addAccountSpy = new AddAccountSpy()
  validationSpy.errorMessage = params?.validationError
  const sut = render(
    <Router location={history.location} navigator={history}>
      <SignUp validation={validationSpy} addAccount={addAccountSpy} />
    </Router>
  )
  return { sut, addAccountSpy }
}

const simulateValidSubmit = (
  sut: RenderResult,
  email = faker.internet.email(),
  password = faker.internet.password()
): void => {
  const emailInput = sut.getByTestId('email')
  fireEvent.input(emailInput, { target: { value: email } })
  const passwordInput = sut.getByTestId('password')
  fireEvent.input(passwordInput, { target: { value: password } })
  const submitButton = sut.getByTestId('submit') as HTMLButtonElement
  fireEvent.click(submitButton)
}

describe('SignUp Component', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  test('Should start with inital state', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })

  test('Should should call AddAccount only once', () => {
    const { sut, addAccountSpy } = makeSut()
    simulateValidSubmit(sut)
    simulateValidSubmit(sut)
    expect(addAccountSpy.callsCount).toBe(1)
  })
})
