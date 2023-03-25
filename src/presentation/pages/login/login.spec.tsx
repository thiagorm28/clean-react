import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Login from './login'

const makeSut = (): RenderResult => {
  const sut = render(<Login />)
  return sut
}

describe('Login Component', () => {
  test('Should start with inital state', () => {
    const { getByTestId } = makeSut()
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)

    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    const emailInput = getByTestId('email') as HTMLButtonElement
    expect(emailInput.disabled).toBe(true)
  })
})
