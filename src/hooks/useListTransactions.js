import { useEffect, useState } from 'react';
import { searchTransactions } from '../services/transactions';

export default function useListTransactions() {
  const [transacoes, setTransacoes] = useState([]);

  async function listaTransacoes() {
    const transacoes = await searchTransactions();
    setTransacoes(transacoes);
  }

  useEffect(() => {
    listaTransacoes();
  }, []);

  return [transacoes, setTransacoes];
}
