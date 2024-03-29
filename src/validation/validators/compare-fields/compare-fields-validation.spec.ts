import { InvalidFieldError } from '@/validation/errors'
import { faker } from '@faker-js/faker'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (field: string, fieldToCompare: string): CompareFieldsValidation =>
  new CompareFieldsValidation(field, fieldToCompare)

describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({ [field]: faker.random.word(), [fieldToCompare]: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if compare is valid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const sut = makeSut(field, fieldToCompare)
    const fieldValue = faker.random.word()
    const error = sut.validate({ [field]: fieldValue, [fieldToCompare]: fieldValue })
    expect(error).toBeFalsy()
  })
})
