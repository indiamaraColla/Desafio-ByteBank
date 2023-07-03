import { useEffect, useState } from 'react';
import { searchTransactions } from '../services/transactions';

type Transaction = {
  data: string;
  mes: string;
  transacao: string;
  valor: string;
};

type SetTransactions = React.Dispatch<React.SetStateAction<Transaction[]>>;
export type UseListTransactionsResult = [Transaction[], SetTransactions];

export default function useListTransactions(): UseListTransactionsResult {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const listTransactions = async () => {
    const transactions = await searchTransactions();
    setTransactions(transactions);
  };

  useEffect(() => {
    listTransactions();
  }, []);

  return [transactions, setTransactions];
}
