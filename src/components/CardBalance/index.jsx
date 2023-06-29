import React from 'react';
import Balance from './Balance';
import styles from './CardBalance.module.css';
import { ReactComponent as Ilustracao } from './ilustracao.svg';

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export default function CardBalance({ balance }) {
  return (
    <section className={styles.container}>
      <div className={styles.detalhe__superior} />
      <h1 className={styles.titulo}>Olá, Joana :)!</h1>
      <p data-testid="data-atual" className={styles.data}>{`${
        diasDaSemana[hoje.getDay()]
      }, ${hoje.toLocaleDateString('pt-BR')}`}</p>
      <div className={styles.wrapper}>
        <Ilustracao className={styles.ilustracao} width="250" height="225" />
        <Balance balance={balance} />
      </div>
      <div className={styles.detalhe__inferior} />
    </section>
  );
}
