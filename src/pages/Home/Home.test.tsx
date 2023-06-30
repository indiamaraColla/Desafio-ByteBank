import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../routes';
import Home from './index';

describe('Component <Home/>', () => {
  test('should allow adding a transaction in the Extract', () => {
    render(<Home />, { wrapper: BrowserRouter });

    const select = screen.getByRole('combobox');
    const textField = screen.getByPlaceholderText('Digite um valor');
    const button = screen.getByRole('button');

    userEvent.selectOptions(select, ['Depósito']);
    userEvent.type(textField, '100');
    userEvent.click(button);

    const newTransaction = screen.getByTestId('lista-transacoes');
    const itemExtract = screen.getByRole('listitem');

    expect(newTransaction).toContainElement(itemExtract);
  });

  test('should  navigate to the page corresponding to the clicked link', async () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });

    const linkPageCard = screen.getByText('Cartões');
    expect(linkPageCard).toBeInTheDocument();

    userEvent.click(linkPageCard);

    const titlePageCards = await screen.findByText('Meus cartões');
    expect(titlePageCards).toBeInTheDocument();
  });
});
