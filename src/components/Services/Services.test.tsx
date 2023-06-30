import { render } from '@testing-library/react';
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
});
