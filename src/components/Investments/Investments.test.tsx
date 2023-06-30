import { render } from '@testing-library/react';
import Investments from './index';
describe('Investments', () => {
  it('should render investment section with correct values ', () => {
    const { getByText } = render(<Investments />);

    const investmentValue = getByText('Total: R$ 1.000.000,00');
    const fixedIncomeValue = getByText('R$ 2.000.000,00');
    const variableIncomeValue = getByText('R$ 700.000,00');
    expect(investmentValue).toBeInTheDocument();
    expect(fixedIncomeValue).toBeInTheDocument();
    expect(variableIncomeValue).toBeInTheDocument();
  });

  it('should render investment section with correct title ', () => {
    const { getByText } = render(<Investments />);

    const investmentsTitle = getByText('Investimentos');
    const fixedIncomeTitle = getByText('Renda Fixa');
    const incomeVariableTitle = getByText('Renda variável');
    const statisticsTitle = getByText('Estatísticas');
    expect(investmentsTitle).toBeInTheDocument();
    expect(fixedIncomeTitle).toBeInTheDocument();
    expect(incomeVariableTitle).toBeInTheDocument();
    expect(statisticsTitle).toBeInTheDocument();
  });

  it('should render investment section with correct img ', () => {
    const { getByAltText } = render(<Investments />);

    const graphicImage = getByAltText('Gráfico dos investimentos');
    expect(graphicImage).toBeInTheDocument();
  });
});
