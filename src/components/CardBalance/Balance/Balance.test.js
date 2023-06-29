import { render, screen } from '@testing-library/react';
import Balance from './index';

describe('Componente <Saldo />', () => {
  test('Deve renderizar o saldo com valor monetário', () => {
    render(<Balance balance={1000} />);

    const saldo = screen.getByTestId('saldo');
    expect(saldo).toHaveTextContent('R$ 1000');
  });
});
