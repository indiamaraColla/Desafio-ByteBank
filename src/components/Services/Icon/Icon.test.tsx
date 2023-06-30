import { render } from '@testing-library/react';
import Icon from './index';
describe('Icon', () => {
  it('should render icon ', () => {
    const icon = {
      servico: 'Empréstimo',
      imagem: '/imagens/icones/emprestimo.svg',
    };

    const { getByAltText } = render(<Icon icon={icon} styles="servicos" />);

    const serviceElement = getByAltText(icon.servico);
    const iconElement = getByAltText(icon.servico);

    expect(serviceElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
