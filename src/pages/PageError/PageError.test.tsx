import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageError from './index';

describe('PageError', () => {
  it('renders error message and link', () => {
    render(
      <MemoryRouter>
        <PageError />
      </MemoryRouter>
    );

    const errorMessage = screen.getByText(/Ops! Não encontramos a página/i);
    expect(errorMessage).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /Voltar ao início/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');

    const image = screen.getByAltText('Imagem ilustrativa do espaço');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '404.svg');
  });
});
