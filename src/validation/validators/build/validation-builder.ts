import { FieldValidation } from '@/validation/protocols/field-validation'
import {
  RequiredFieldValidation,
  MinLengthValidation,
  EmailValidation,
  CompareFieldsValidation,
} from '@/validation/validators'

export class ValidationBuilder {
  private constructor(private readonly fieldName: string, private readonly validations: FieldValidation[]) {}

  static field(fieldName: string) {
    return new ValidationBuilder(fieldName, [])
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  minLenght(minLenght: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, minLenght))
    return this
  }

  sameAs(fieldToCompare: string): ValidationBuilder {
    this.validations.push(new CompareFieldsValidation(this.fieldName, fieldToCompare))
    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
