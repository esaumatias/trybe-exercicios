// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

test('verifica se existem repositorios', async() => {
  
  const repo = await getRepos('https://api.github.com/orgs/tryber/repos');

  expect(repo).toContain('sd-01-week4-5-project-todo-list');
  expect(repo).toContain('sd-01-week4-5-project-meme-generator');
});