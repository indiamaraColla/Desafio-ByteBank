import { render } from '@testing-library/react';
import CardBalance from './index';
describe('CardBalance', () => {
  it('should display correct balance', () => {
    const amount = 100;

    const { getByText } = render(<CardBalance balance={amount} />);

    const balance = getByText(`R$ ${amount}`);
    expect(balance).toBeInTheDocument();
  });

  it('should display correct current date', () => {
    const amount = 80;
    const { getByTestId } = render(<CardBalance balance={amount} />);

    const currentDateElement = getByTestId('data-atual');
    const expectedDateText = 'Sexta-feira, 30/06/2023';
    expect(currentDateElement.textContent).toBe(expectedDateText);
  });

  it('should display correct username in title', () => {
    const amount = 10;
    const name = 'Joana';

    const { getByText } = render(<CardBalance balance={amount} />);
    const titleElement = getByText(`Olá, ${name} :)!`);
    expect(titleElement).toBeInTheDocument();
  });
});
