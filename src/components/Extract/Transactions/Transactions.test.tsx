import { render, screen } from '@testing-library/react';
import Transations from './index';

test('Should render the same component with updated props', () => {
  const listTransations = {
    transacao: 'Depósito',
    valor: '100',
    data: '29/06/2023',
    mes: 'Junho',
  };
  const { rerender } = render(<Transations item={listTransations} />);
  const typeTransations = screen.getByTestId('tipoTransacao');
  const valueTransations = screen.getByTestId('valorTransacao');

  expect(typeTransations).toHaveTextContent('Depósito');
  expect(valueTransations).toHaveTextContent('R$ 100');

  const newTransations = {
    transacao: 'Transferência',
    valor: '50',
    data: '29/06/2023',
    mes: 'Junho',
  };

  rerender(<Transations item={newTransations} />);
  const newTypeTransations = screen.getByTestId('tipoTransacao');
  const newValueTransations = screen.getByTestId('valorTransacao');

  expect(newTypeTransations).toHaveTextContent('Transferência');
  expect(newValueTransations).toHaveTextContent('- R$ 50');
});
