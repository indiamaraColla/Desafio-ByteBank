import { fireEvent, render } from '@testing-library/react';
import Cards from './index';
describe('Cards', () => {
  it('should render cards section with correct titles', () => {
    const { getByText } = render(<Cards />);

    const cardTitle = getByText('Meus cartões');
    const physicalCardType = getByText('Cartão físico');
    const digitalCardType = getByText('Cartão digital');
    expect(cardTitle).toBeInTheDocument();
    expect(physicalCardType).toBeInTheDocument();
    expect(digitalCardType).toBeInTheDocument();
  });

  it('should render cards section with correct images', () => {
    const { getByAltText } = render(<Cards />);

    const physicalCardImage = getByAltText('Cartão físico');
    const digitalCardImage = getByAltText('Cartão digital');
    expect(physicalCardImage).toBeInTheDocument();
    expect(digitalCardImage).toBeInTheDocument();
  });

  it('should trigger button actions when clicked physical card', () => {
    const { getByTestId } = render(<Cards />);
    const configurarActions = getByTestId('card-physical-config');

    fireEvent.click(configurarActions);
    expect(configurarActions).toBeInTheDocument();

    const bloquearButton = getByTestId('card-physical-block');

    fireEvent.click(bloquearButton);
    expect(bloquearButton).toBeInTheDocument();
  });

  it('should trigger button actions when clicked digital card', () => {
    const { getByTestId } = render(<Cards />);
    const configurarActions = getByTestId('card-digital-config');

    fireEvent.click(configurarActions);
    expect(configurarActions).toBeInTheDocument();

    const bloquearButton = getByTestId('card-digital-block');

    fireEvent.click(bloquearButton);
    expect(bloquearButton).toBeInTheDocument();
  });
});
