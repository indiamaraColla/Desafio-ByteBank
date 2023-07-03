import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './index';

test('Should render link to homepage', () => {
  render(<Menu path="/" />, { wrapper: BrowserRouter });
  const linkPageHome = screen.getByText('Início');
  expect(linkPageHome).toBeInTheDocument();
});

test('should render a list with four links', () => {
  render(<Menu path="/" />, { wrapper: BrowserRouter });
  const linkPageHome = screen.getAllByRole('link');
  expect(linkPageHome).toHaveLength(4);
});

test('should not render Extract link', () => {
  render(<Menu path="/" />, { wrapper: BrowserRouter });
  const linkExtract = screen.queryByText('Extrato');
  expect(linkExtract).not.toBeInTheDocument();
});

test('should render the links with the link class', () => {
  render(<Menu path="/" />, { wrapper: BrowserRouter });
  const links = screen.getAllByRole('link');
  links.forEach((link) => {
    expect(link).toHaveClass('link');
  });
  expect(links).toMatchSnapshot();
});
