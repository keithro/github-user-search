class GitHub {
  constructor() {
    this.client_id = '9b4d07bd172820e72562';
    this.client_secret = '23f1cfec06a3b4e8b3d6eb93a3c521021fba9c68';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, // profile: profile
      repos // repos: repos
    }
  }
}