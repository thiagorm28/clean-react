import { faker } from '@faker-js/faker'
import axios from 'axios'

export const mockHttpResponse = (): any => ({
  data: JSON.parse(faker.datatype.json()),
  status: faker.random.numeric(),
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: JSON.parse(faker.datatype.json()),
    status: faker.datatype.number(),
  })
  return mockedAxios
}
