import { Outlet, useLocation } from 'react-router-dom';
import useListaTransacoes from '../../hooks/useListaTransacoes';
import useSaldo from '../../hooks/useSaldo';
import { atualizaSaldo } from '../../services/saldo';
import { salvaTransacao } from '../../services/transacoes';
import { calculaNovoSaldo } from '../../utils';
import estilos from './App.module.css';

import CardBalance from '../../components/CardBalance';
import Extract from '../../components/Extract';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Transactions from '../../components/Transactions';

export default function App() {
  const [saldo, setSaldo] = useSaldo();
  const [transacoes, setTransacoes] = useListaTransacoes();
  const location = useLocation();

  function realizarTransacao(valores) {
    const novoSaldo = calculaNovoSaldo(valores, saldo);
    setSaldo(novoSaldo);
    atualizaSaldo(novoSaldo);
    setTransacoes([...transacoes, valores]);
    salvaTransacao(valores);
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
