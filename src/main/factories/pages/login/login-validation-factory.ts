import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/build/validation-builder'

export const makeLoginValidation = (): ValidationComposite => {
  return new ValidationComposite([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().minLenght(5).build(),
  ])
}
