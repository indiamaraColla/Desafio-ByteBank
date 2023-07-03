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
      <div className={styles.divider} />
      <p className={styles.account}>Conta corrente</p>
      <p data-testid="balance" className={styles.amount}>{`R$ ${balance}`}</p>
    </div>
  );
}
