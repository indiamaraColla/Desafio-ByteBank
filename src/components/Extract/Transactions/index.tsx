import { TransactionsProps } from 'types/Interface/Transactions';
import styles from '../Extract.module.css';

interface ResultProps {
  item: TransactionsProps;
}

export default function Transactions({ item }: ResultProps) {
  return (
    <li>
      <p className={styles.month}>{item.mes}</p>
      <div className={styles.transaction}>
        <p data-testid="tipoTransacao">{item.transacao}</p>
        <span>{item.data}</span>
      </div>
      {item.transacao === 'Transferência' ? (
        <h3
          data-testid="valorTransacao"
          className={styles.amount}
        >{`- R$ ${item.valor}`}</h3>
      ) : (
        <h3
          data-testid="valorTransacao"
          className={styles.amount}
        >{` R$ ${item.valor}`}</h3>
      )}
      <div className={styles.divider} />
    </li>
  );
}
