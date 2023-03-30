export class EmailAlreadyInUseError extends Error {
  constructor() {
    super('E-mail já em uso')
    this.name = 'EmailAlreadyInUseError'
  }
}
