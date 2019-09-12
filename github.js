class Github {
  constructor () {
    this.client_id = 'f402faabec79f2508cd5'
    this.client_secret = 'ae5cffc7345291a2f5e5e10eada4623a38f267d2'
  }

  async getUser (user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()

    return {
      profile
    }
  }
}
