import styles from './Balance.module.css';
import { ReactComponent as Icon } from './icone-olho.svg';

interface BalanceProps {
  balance: number;
}

export default function Balance({ balance }: BalanceProps) {
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
