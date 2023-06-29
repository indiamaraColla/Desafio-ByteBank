import React from 'react';
import Box from './Box';
import styles from './Investments.module.css';
import grafico from './grafico.svg';

export default function Investments() {
  return (
    <section className="container">
      <div className="detalhe__superior" />
      <div className={styles.wrapper}>
        <div className={styles.investimentos}>
          <h2>Investimentos</h2>
          <p>Total: R$ 1.000.000,00</p>
        </div>
        <div className={styles.aplicacoes}>
          <Box renda="Renda Fixa" styles={styles.renda}>
            R$ 300.000,00
          </Box>
          <Box renda="Renda variável" styles={styles.renda}>
            R$ 700.000,00
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
