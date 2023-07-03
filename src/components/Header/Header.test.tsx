import { render, screen } from '@testing-library/react';
import Header from './index';

test('Should render the name of the logged in user', () => {
  render(<Header />);
  const newUser = screen.getByText('Joana Fonseca Gomes');
  expect(newUser).toBeInTheDocument();
});
