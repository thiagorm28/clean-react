import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/build/validation-builder'
import { makeLoginValidation } from './login-validation-factory'

describe('LoginFactory', () => {
  test('Should make ValidationComposite return correct validations', () => {
    const composite = makeLoginValidation()
    expect(composite).toEqual(
      new ValidationComposite([
        ...ValidationBuilder.field('email').required().email().build(),
        ...ValidationBuilder.field('password').required().minLenght(5).build(),
      ])
    )
  })
})
