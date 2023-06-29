import { render, screen } from '@testing-library/react';
import Extract from './index';

test('Deve renderizar uma lista de transações', () => {
  const listTransations = [
    {
      transacao: 'Depósito',
      valor: 100,
    },
  ];

  render(<Extract listTransations={listTransations} />);
  const lista = screen.getByRole('listitem');
  expect(lista).toBeInTheDocument();
});
