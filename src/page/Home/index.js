import { Outlet, useLocation } from 'react-router-dom';
import useBalance from '../../hooks/useBalance';
import useListTransactions from '../../hooks/useListTransactions';
import { updateBalance } from '../../services/balance';
import { saveTransaction } from '../../services/transactions';
import { calculateNewBalance } from '../../utils';
import estilos from './Home.module.css';

import CardBalance from '../../components/CardBalance';
import Extract from '../../components/Extract';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Transactions from '../../components/Transactions';

export default function Home() {
  const [saldo, setSaldo] = useBalance();
  const [transacoes, setTransacoes] = useListTransactions();
  const location = useLocation();

  function realizarTransacao(valores) {
    const novoSaldo = calculateNewBalance(valores, saldo);
    setSaldo(novoSaldo);
    updateBalance(novoSaldo);
    setTransacoes([...transacoes, valores]);
    saveTransaction(valores);
  }

  return (
    <>
      <Header />
      <main className={estilos.caixa}>
        <Menu path={location.pathname} />
        <div className={estilos.envelope}>
          <CardBalance saldo={saldo} />
          {location.pathname === '/' && (
            <Transactions realizarTransacao={realizarTransacao} />
          )}
          <Outlet />
        </div>
        <Extract transacoes={transacoes} />
      </main>
    </>
  );
}