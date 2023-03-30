import { LocalStorageAdapter } from './local-storage-adapter'
import 'jest-localstorage-mock'
import { faker } from '@faker-js/faker'

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage with correct values', async () => {
    const sut = new LocalStorageAdapter()
    const key = faker.database.column()
    const value = faker.random.alphaNumeric()
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})
