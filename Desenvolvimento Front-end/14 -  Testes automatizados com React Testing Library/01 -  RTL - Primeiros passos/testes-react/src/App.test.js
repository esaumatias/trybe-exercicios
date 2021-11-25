import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ValidEmail from './ValidEmail';
// import userEvents from './userEvents';

describe('Tela de inserção do email', () => {

  it('Verifica se existe um input do tipo email', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText("email");
  
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
  })
  
  it('verifica se exite um botão', () => {
    render(<App />);
    const button = screen.getByRole("button");
  
    expect(button).toBeInTheDocument();
    expect(button.type).toBe("submit");
  })
  
  it('verifica se exite um botão enviar', () => {
    render(<App />);
    const button = screen.getByTestId("id-submit");
  
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("enviar");
  })

})

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});
