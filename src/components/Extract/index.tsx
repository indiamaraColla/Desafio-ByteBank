import { TransactionsProps } from 'types/Interface/Transations';
import styles from './Extract.module.css';
import Transactions from './Transactions';

interface ExtractProps {
  listTransations: TransactionsProps[];
}

export default function Extract({ listTransations }: ExtractProps) {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Extrato</h2>
      <ul data-testid="lista-transacoes">
        {listTransations.map((item, indice) => {
          return <Transactions key={indice} item={item} />;
        })}
      </ul>
    </section>
  );
}
