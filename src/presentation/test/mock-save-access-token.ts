export class SaveAccessToken implements SaveAccessToken {
  accessToken: string
  async save(accessToken: string): Promise<void> {
    this.accessToken = accessToken
  }
}
