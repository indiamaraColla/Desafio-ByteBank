import { fireEvent, render } from '@testing-library/react';
import Transactions from './index';
describe('Transactions', () => {
  it('should perform transaction when form is submitted', () => {
    const performTransactionMock = jest.fn();

    const { getByTestId, getByText } = render(
      <Transactions performTransaction={performTransactionMock} />
    );

    const inputField = getByTestId('form-input');
    fireEvent.change(inputField, { target: { value: '100' } });

    const labelButton = getByText('Realizar transação');
    fireEvent.click(labelButton);

    expect(performTransactionMock).toHaveBeenCalledWith({
      data: '30/06/2023',
      mes: 'Junho',
      transacao: '',
      valor: '100',
    });
  });
});
