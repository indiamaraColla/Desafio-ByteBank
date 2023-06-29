import React from 'react';
import styles from './Balance.module.css';
import { ReactComponent as Icon } from './icone-olho.svg';

export default function Balance({ balance }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.balance}>Saldo</h2>
        <Icon />
      </div>
      <div className={styles.divisor} />
      <p className={styles.conta}>Conta corrente</p>
      <p data-testid="saldo" className={styles.valor}>{`R$ ${balance}`}</p>
    </div>
  );
}
