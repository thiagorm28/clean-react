import { Validation } from '@/presentation/protocols/validation'

export class ValidationSpy implements Validation {
  errorMessage: string
  fieldName: string
  fieldValue: object

  validate(fieldName: string, fieldValue: object): string {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.errorMessage
  }
}
