import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './index';

test('Deve renderizar o link para a página inicial', () => {
  render(<Menu path="/" />, { wrapper: BrowserRouter });
  const linkPageHome = screen.getByText('Início');
  expect(linkPageHome).toBeInTheDocument();
});

test('Deve renderizar uma lista com quatro links', () => {
  render(<Menu path="/" />, { wrapper: BrowserRouter });
  const linkPageHome = screen.getAllByRole('link');
  expect(linkPageHome).toHaveLength(4);
});

test('Não deve renderizar o link de Extrato', () => {
  render(<Menu path="/" />, { wrapper: BrowserRouter });
  const linkExtract = screen.queryByText('Extrato');
  expect(linkExtract).not.toBeInTheDocument();
});

test('Deve renderizar os links com a classe link', () => {
  render(<Menu path="/" />, { wrapper: BrowserRouter });
  const links = screen.getAllByRole('link');
  links.forEach((link) => {
    expect(link).toHaveClass('link');
  });
  expect(links).toMatchSnapshot();
});
