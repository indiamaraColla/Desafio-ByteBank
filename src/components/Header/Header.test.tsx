const { render, screen } = require('@testing-library/react');
import Header from './index';

test('Deve renderizar o nome do usuário logado', () => {
  render(<Header />);
  const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
  expect(nomeUsuario).toBeInTheDocument();
});
