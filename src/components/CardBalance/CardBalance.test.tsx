import { render } from '@testing-library/react';

import { daysOfTheWeek, today } from './config';
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
    const expectedDateText = `${
      daysOfTheWeek[today.getDay()]
    }, ${today.toLocaleDateString('pt-BR')}`;

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
