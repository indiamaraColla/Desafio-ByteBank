import { TransactionsProps } from 'types/Interface/Transactions';
import styles from './Extract.module.css';
import Transactions from './Transactions';

interface ExtractProps {
  listTransations: TransactionsProps[];
}

export default function Extract({ listTransations }: ExtractProps) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Extrato</h2>
      {listTransations.length > 0 ? (
        <ul data-testid="transaction-list">
          {listTransations.map((item, indice) => {
            return <Transactions key={indice} item={item} />;
          })}
        </ul>
      ) : (
        <span>
          Não encontramos nenhum movimentação, realize uma transação...
        </span>
      )}
    </section>
  );
}
