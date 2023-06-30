import { TransactionsProps } from './Transactions';

describe('TransactionsProps', () => {
  test('should have the correct properties', () => {
    const transaction: TransactionsProps = {
      transacao: 'Deposit',
      valor: '100',
      mes: 'June',
      data: '06/30/2023',
    };

    expect(transaction.transacao).toBeDefined();
    expect(transaction.valor).toBeDefined();
    expect(transaction.mes).toBeDefined();
    expect(transaction.data).toBeDefined();
  });
});
