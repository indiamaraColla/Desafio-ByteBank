import { fireEvent, render } from '@testing-library/react';
import { format, isSameMonth } from 'date-fns';
import MockDate from 'mockdate';
import Transactions from './index';

describe('Transactions', () => {
  beforeEach(() => {
    MockDate.set('2023-06-30');
  });

  afterEach(() => {
    MockDate.reset();
  });

  it('should perform transaction when form is submitted', () => {
    const performTransactionMock = jest.fn();
    const currentDate = new Date();
    const expectedDate = new Date('2023-06-30');

    const { getByTestId, getByText } = render(
      <Transactions performTransaction={performTransactionMock} />
    );

    const inputField = getByTestId('form-input');
    fireEvent.change(inputField, { target: { value: '100' } });

    const labelButton = getByText('Realizar transação');
    fireEvent.click(labelButton);

    expect(performTransactionMock).toHaveBeenCalledWith({
      data: format(expectedDate, 'dd/MM/yyyy'),
      mes: isSameMonth(expectedDate, currentDate) ? 'Junho' : '',
      transacao: '',
      valor: '100',
    });
  });
});
