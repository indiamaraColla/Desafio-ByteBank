import { useEffect, useState } from 'react';
import { searchTransactions } from '../services/transactions';

type Transaction = {
  data: string;
  mes: string;
  transacao: string;
  valor: string;
};

type SetTransactions = React.Dispatch<React.SetStateAction<Transaction[]>>;
type UseListTransactionsResult = [Transaction[], SetTransactions];

export default function useListTransactions(): UseListTransactionsResult {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function listTransactions() {
    const transactions = await searchTransactions();
    setTransactions(transactions);
  }

  useEffect(() => {
    listTransactions();
  }, []);

  return [transactions, setTransactions];
}
