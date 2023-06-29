import { useEffect, useState } from 'react';
import { searchTransactions } from '../services/transactions';

type Transaction = {
  data: string;
  mes: string;
  transacao: string;
  valor: number;
};

type SetTransactions = React.Dispatch<React.SetStateAction<never[]>>;
type UseListTransactionsResult = [Transaction[], SetTransactions];

export default function useListTransactions(): UseListTransactionsResult {
  const [transactions, setTransactions] = useState([]);

  async function listTransactions() {
    const transactions = await searchTransactions();
    setTransactions(transactions);
  }

  useEffect(() => {
    listTransactions();
  }, []);

  return [transactions, setTransactions];
}
