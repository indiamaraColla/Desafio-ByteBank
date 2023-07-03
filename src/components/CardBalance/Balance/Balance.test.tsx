import { render, screen } from '@testing-library/react';
import Balance from './index';

describe('Componente <Saldo />', () => {
  test('should render balance with monetary value', () => {
    render(<Balance balance={1000} />);

    const balance = screen.getByTestId('balance');
    expect(balance).toHaveTextContent('R$ 1000');
  });
});
