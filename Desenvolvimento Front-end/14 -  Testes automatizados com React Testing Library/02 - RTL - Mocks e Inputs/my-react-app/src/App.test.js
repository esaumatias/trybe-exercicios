import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica se recee piada emostra na tela', async () => {
  global.fetch = (url) => {
    return Promise.resolve({
      json: () => Promise.resolve({
        id: '7h30Gtr0fxc',
        joke: 'whinteboards ... are remarkable.',
        status: 200, 
      })
    })
  }

  render(<App />);
  const renderJoke = await screen.findByText('whinteboards ... are remarkable.');
  expect(renderJoke).toBeInTheDocument();
});
