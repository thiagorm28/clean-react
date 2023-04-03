import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/build/validation-builder'

export const makeSignUpValidation = (): ValidationComposite => {
  return new ValidationComposite([
    ...ValidationBuilder.field('name').required().minLenght(5).build(),
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().minLenght(5).build(),
    ...ValidationBuilder.field('passwordConfirmation').required().sameAs('password').build(),
  ])
}
