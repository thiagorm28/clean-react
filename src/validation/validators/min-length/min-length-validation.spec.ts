import { InvalidFieldError } from '@/validation/errors'
import { faker } from '@faker-js/faker'
import { MinLengthValidation } from './min-length-validation'

describe('MinLenghtValition', () => {
  test('Should return error if email is invalid', () => {
    const sut = new MinLengthValidation(faker.random.word(), 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if email is valid', () => {
    const sut = new MinLengthValidation(faker.random.word(), 5)
    const error = sut.validate('12345')
    expect(error).toBeFalsy()
  })
})
