import { useEffect, useState } from 'react';
import { buscaTransacoes } from '../services/transacoes';

export default function useListTransactions() {
  const [transacoes, setTransacoes] = useState([]);

  async function listaTransacoes() {
    const transacoes = await buscaTransacoes();
    setTransacoes(transacoes);
  }

  useEffect(() => {
    listaTransacoes();
  }, []);

  return [transacoes, setTransacoes];
}
