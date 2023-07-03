import { fireEvent, render } from '@testing-library/react';
import icon from './icon.json';
import Services from './index';

describe('Services', () => {
  it('should render services', () => {
    const { getByTestId } = render(<Services />);

    icon.forEach((element) => {
      expect(
        getByTestId(`service-icon-${element.servico}`)
      ).toBeInTheDocument();
    });
  });

  it('should update hasService state when button is clicked', () => {
    const { getByTestId } = render(<Services />);
    const servicesSection = getByTestId('services');
    const button = servicesSection.querySelector('button');

    if (button) {
      fireEvent.click(button);
    }

    expect(servicesSection).toHaveTextContent(
      'Serviços indisponível no momento, tente novamente mais tarde...'
    );
  });
});
