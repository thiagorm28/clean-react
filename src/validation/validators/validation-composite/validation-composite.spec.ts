import { FieldValidation } from '@/validation/protocols/field-validation'
import { faker } from '@faker-js/faker'
import { FieldValidationSpy } from '../test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

const makeSut = (validators: FieldValidation[]): ValidationComposite => new ValidationComposite(validators)

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldValidationSpy = new FieldValidationSpy('any_field')
    fieldValidationSpy.error = new Error('first_error_message')
    const fieldValidationSpy2 = new FieldValidationSpy('any_field')
    fieldValidationSpy2.error = new Error('second_error_message')
    const sut = makeSut([fieldValidationSpy, fieldValidationSpy2])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
