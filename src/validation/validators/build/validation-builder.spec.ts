import { faker } from '@faker-js/faker'
import {
  RequiredFieldValidation,
  EmailValidation,
  MinLengthValidation,
  CompareFieldsValidation,
} from '@/validation/validators'
import { ValidationBuilder } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const fieldName = faker.database.column()
    const validations = ValidationBuilder.field(fieldName).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(fieldName)])
  })

  test('Should return EmailFieldValidation', () => {
    const fieldName = faker.database.column()
    const validations = ValidationBuilder.field(fieldName).email().build()
    expect(validations).toEqual([new EmailValidation(fieldName)])
  })

  test('Should return MinLengthValidation', () => {
    const fieldName = faker.database.column()
    const minLenght = 5
    const validations = ValidationBuilder.field(fieldName).minLenght(minLenght).build()
    expect(validations).toEqual([new MinLengthValidation(fieldName, minLenght)])
  })

  test('Should return CompareFieldsValidation', () => {
    const fieldName = faker.database.column()
    const fieldToCompareName = faker.database.column()
    const validations = ValidationBuilder.field(fieldName).sameAs(fieldToCompareName).build()
    expect(validations).toEqual([new CompareFieldsValidation(fieldName, fieldToCompareName)])
  })

  test('Should return a list of validations', () => {
    const fieldName = faker.database.column()
    const minLenght = 5
    const validations = ValidationBuilder.field(fieldName).required().email().minLenght(minLenght).build()
    expect(validations).toEqual([
      new RequiredFieldValidation(fieldName),
      new EmailValidation(fieldName),
      new MinLengthValidation(fieldName, minLenght),
    ])
  })
})
