import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe um input do tipo email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText("email");

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email");
})

test('verifica se exite um botão', () => {
  render(<App />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button.type).toBe("submit");
})