import { render } from '@testing-library/react';
import Box from './index';
describe('Box', () => {
  it('should render Box ', () => {
    const styles = {
      renda: 'renda',
    };
    const name = 'Renda variável';

    const { getByText } = render(
      <Box renda={name} styles={styles.renda}>
        R$ 1.000,00
      </Box>
    );

    const title = getByText(name);
    const value = getByText('R$ 1.000,00');
    expect(title).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
