import { render, screen } from '@testing-library/react';
import styles from '../Extrato.module.css';
import Transacoes from './index';

test('Deve renderizar o mesmo componente com props atualizadas', () => {
  const listTransations = {
    transacao: 'Depósito',
    valor: 100,
  };
  const { rerender } = render(
    <Transacoes styles={styles} item={listTransations} />
  );
  const tipoTransacao = screen.getByTestId('tipoTransacao');
  const valorTransacao = screen.getByTestId('valorTransacao');

  expect(tipoTransacao).toHaveTextContent('Depósito');
  expect(valorTransacao).toHaveTextContent('R$ 100');

  const newTransations = {
    transacao: 'Transferência',
    valor: 50,
  };

  rerender(<Transacoes styles={styles} item={newTransations} />);
  const novoTipoTransacao = screen.getByTestId('tipoTransacao');
  const novoValorTransacao = screen.getByTestId('valorTransacao');

  expect(novoTipoTransacao).toHaveTextContent('Transferência');
  expect(novoValorTransacao).toHaveTextContent('- R$ 50');
});
