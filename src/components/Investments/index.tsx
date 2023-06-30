import Box from './Box';
import styles from './Investments.module.css';
import grafico from './grafico.svg';

export default function Investments() {
  const investmentValue = '1.000.000,00';
  const fixedIncomeValue = '2.000.000,00';
  const variableIcomeValue = '700.000,00';

  return (
    <section className="container">
      <div className="detalhe__superior" />
      <div className={styles.wrapper}>
        <div className={styles.investimentos}>
          <h2>Investimentos</h2>
          <p>Total: R$ {investmentValue}</p>
        </div>
        <div className={styles.aplicacoes}>
          <Box renda="Renda Fixa" styles={styles.renda}>
            R$ {fixedIncomeValue}
          </Box>
          <Box renda="Renda variável" styles={styles.renda}>
            R$ {variableIcomeValue}
          </Box>
        </div>
        <h3>Estatísticas</h3>
        <div className={styles.grafico}>
          <img src={grafico} alt="Gráfico dos investimentos" />
        </div>
      </div>
      <div className="detalhe__inferior" />
    </section>
  );
}
