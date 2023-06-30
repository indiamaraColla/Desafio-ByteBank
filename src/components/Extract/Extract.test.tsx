import { render, screen } from '@testing-library/react';
import Extract from './index';

test('Deve renderizar uma lista de transações', () => {
  const listTransations = [
    {
      transacao: 'Transferência',
      valor: '50',
      data: '29/06/2023',
      mes: 'Junho',
    },
  ];

  render(<Extract listTransations={listTransations} />);
  const list = screen.getByRole('listitem');
  expect(list).toBeInTheDocument();
});
