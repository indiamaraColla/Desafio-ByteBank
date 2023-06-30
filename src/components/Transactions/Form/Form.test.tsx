import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './index';

describe('should render an input field', () => {
  test('in the document', () => {
    const performTransactionMock = jest.fn();
    render(<Form performTransaction={performTransactionMock} />);
    const TextField = screen.getByPlaceholderText('Digite um valor');
    expect(TextField).toBeInTheDocument();
  });

  test('with type "number"', () => {
    const performTransactionMock = jest.fn();
    render(<Form performTransaction={performTransactionMock} />);
    const TextField = screen.getByPlaceholderText('Digite um valor');
    expect(TextField).toHaveAttribute('type', 'number');
  });

  test('that can be filled', () => {
    const performTransactionMock = jest.fn();
    render(<Form performTransaction={performTransactionMock} />);
    const TextField = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(TextField, '50');
    expect(TextField).toHaveValue(50);
  });
});

test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
  const performTransaction = jest.fn();
  render(<Form performTransaction={performTransaction} />);
  const button = screen.getByRole('button');

  userEvent.click(button);
  expect(performTransaction).toHaveBeenCalledTimes(1);
});

test('Should update the formValues state when an option is selected', () => {
  const performTransactionMock = jest.fn();
  render(<Form performTransaction={performTransactionMock} />);

  const selectElement = screen.getByTestId('select-opcoes');
  userEvent.selectOptions(selectElement, 'Depósito');

  expect(selectElement).toHaveValue('Depósito');
});
