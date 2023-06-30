import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './routes';

describe('Routes', () => {
  test('should render main route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const user = screen.getByText('Nova Transação');
    expect(user).toBeInTheDocument();
  });

  test('should render cards route', () => {
    render(
      <MemoryRouter initialEntries={['/cards']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const user = screen.getByText('Meus cartões');
    expect(user).toBeInTheDocument();
  });

  test('should render investments route', () => {
    render(
      <MemoryRouter initialEntries={['/investments']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const investmentsRoute = screen.getByTestId('investments');
    expect(investmentsRoute).toBeInTheDocument();
  });

  test('should render services route', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const servicesRoute = screen.getByTestId('services');
    expect(servicesRoute).toBeInTheDocument();
  });

  test('should render the current route', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const localActual = screen.getByTestId('local');
    expect(localActual).toBeInTheDocument();
  });

  test('should render the error page', () => {
    render(
      <MemoryRouter initialEntries={['/extract']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const pageError = screen.getByTestId('page-error');
    expect(pageError).toContainHTML('<h1>Ops! Não encontramos a página</h1>');
  });
});
