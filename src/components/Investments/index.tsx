import Box from './Box';
import styles from './Investments.module.css';
import grafico from './grafico.svg';

export default function Investments() {
  const investmentValue = '1.000.000,00';
  const fixedIncomeValue = '2.000.000,00';
  const variableIcomeValue = '700.000,00';

  return (
    <section className="container" data-testid="investments">
      <div className="top__detail" />
      <div className={styles.wrapper}>
        <div className={styles.investments}>
          <h2>Investimentos</h2>
          <p>Total: R$ {investmentValue}</p>
        </div>
        <div className={styles.applications}>
          <Box renda="Renda Fixa">R$ {fixedIncomeValue}</Box>
          <Box renda="Renda variável">R$ {variableIcomeValue}</Box>
        </div>
        <h3>Estatísticas</h3>
        <div className={styles.graphic}>
          <img src={grafico} alt="Gráfico dos investimentos" />
        </div>
      </div>
      <div className="bottom__detail" />
    </section>
  );
}
