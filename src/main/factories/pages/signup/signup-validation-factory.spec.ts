import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/build/validation-builder'
import { makeSignUpValidation } from './signup-validation-factory'

describe('SignUpFactory', () => {
  test('Should make ValidationComposite return correct validations', () => {
    const composite = makeSignUpValidation()
    expect(composite).toEqual(
      new ValidationComposite([
        ...ValidationBuilder.field('name').required().minLenght(5).build(),
        ...ValidationBuilder.field('email').required().email().build(),
        ...ValidationBuilder.field('password').required().minLenght(5).build(),
        ...ValidationBuilder.field('passwordConfirmation').required().sameAs('password').build(),
      ])
    )
  })
})
