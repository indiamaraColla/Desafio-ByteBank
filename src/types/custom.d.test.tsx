import { render } from '@testing-library/react';
import { ReactComponent as SvgComponent } from '../assets/bytebank.svg';

describe('SVG Module Declaration', () => {
  test('should render SVG component without errors', () => {
    render(<SvgComponent />);
  });
});
