import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './index';

describe('Deve renderizar um campo de input', () => {
  test('no documento', () => {
    const performTransactionMock = jest.fn();
    render(<Form performTransaction={performTransactionMock} />);
    const TextField = screen.getByPlaceholderText('Digite um valor');
    expect(TextField).toBeInTheDocument();
  });

  test(' com o type number', () => {
    const performTransactionMock = jest.fn();
    render(<Form performTransaction={performTransactionMock} />);
    const TextField = screen.getByPlaceholderText('Digite um valor');
    expect(TextField).toHaveAttribute('type', 'number');
  });

  test(' que pode ser preenchido', () => {
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
