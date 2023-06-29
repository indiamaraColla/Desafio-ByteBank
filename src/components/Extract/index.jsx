import React from 'react';
import styles from './Extract.module.css';
import Transactions from './Transactions';

export default function Extract({ listTransations }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Extrato</h2>
      <ul data-testid="lista-transacoes">
        {listTransations.map((item, indice) => {
          return <Transactions key={indice} item={item} styles={styles} />;
        })}
      </ul>
    </section>
  );
}
