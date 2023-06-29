import React from 'react';
import Form from './Form';
import styles from './Transactions.module.css';
import { ReactComponent as Ilustracao } from './ilustracao.svg';

export default function Transactions({ performTransaction }) {
  return (
    <section className="container">
      <div className="detalhe__superior" />
      <div className={styles.wrapper}>
        <Form performTransaction={performTransaction} />
      </div>
      <Ilustracao height="229" width="459" />
      <div className="detalhe__inferior" />
    </section>
  );
}
