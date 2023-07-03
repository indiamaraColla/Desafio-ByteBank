import Balance from './Balance';
import styles from './CardBalance.module.css';
import { daysOfTheWeek, today } from './config';
import { ReactComponent as Ilustracao } from './ilustracao.svg';

interface CardBalanceProps {
  balance: number;
}

export default function CardBalance({ balance }: CardBalanceProps) {
  return (
    <section className={styles.container}>
      <div className={styles.detalhe__superior} />
      <h1 className={styles.titulo}>Olá, Joana :)!</h1>
      <p data-testid="data-atual" className={styles.data}>{`${
        daysOfTheWeek[today.getDay()]
      }, ${today.toLocaleDateString('pt-BR')}`}</p>
      <div className={styles.wrapper}>
        <Ilustracao className={styles.ilustracao} width="250" height="225" />
        <Balance balance={balance} />
      </div>
      <div className={styles.detalhe__inferior} />
    </section>
  );
}
