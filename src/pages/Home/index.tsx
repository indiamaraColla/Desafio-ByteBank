import { Outlet, useLocation } from 'react-router-dom';
import { TransactionsProps } from 'types/Interface/Transactions';
import CardBalance from '../../components/CardBalance';
import Extract from '../../components/Extract';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Transactions from '../../components/Transactions';
import useBalance from '../../hooks/useBalance';
import useListTransactions from '../../hooks/useListTransactions';
import { updateBalance } from '../../services/balance';
import { saveTransaction } from '../../services/transactions';
import { calculateNewBalance } from '../../utils';
import styles from './Home.module.css';

export default function Home() {
  const [balance, setBalance] = useBalance();
  const [transactions, setTransactions] = useListTransactions();
  const location = useLocation();

  function performTransaction(valores: TransactionsProps) {
    const novobalance = calculateNewBalance(valores, balance);
    setBalance(novobalance);
    updateBalance(novobalance);
    setTransactions([...transactions, valores]);
    saveTransaction(valores);
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Menu path={location.pathname} />
        <div className={styles.envelope}>
          <CardBalance balance={balance} />
          {location.pathname === '/' && (
            <Transactions performTransaction={performTransaction} />
          )}
          <Outlet />
          <noscript data-testid="local">{location.pathname}</noscript>
        </div>

        <Extract listTransations={transactions} />
      </main>
    </>
  );
}
