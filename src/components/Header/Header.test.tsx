import { render, screen } from '@testing-library/react';
import Header from './index';

test('Deve renderizar o nome do usuário logado', () => {
  render(<Header />);
  const newUser = screen.getByText('Joana Fonseca Gomes');
  expect(newUser).toBeInTheDocument();
});
