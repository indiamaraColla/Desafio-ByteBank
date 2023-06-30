import { render, screen } from '@testing-library/react';
import Balance from './index';

describe('Componente <Saldo />', () => {
  test('Deve renderizar o saldo com valor monetário', () => {
    render(<Balance balance={1000} />);

    const balance = screen.getByTestId('saldo');
    expect(balance).toHaveTextContent('R$ 1000');
  });
});
