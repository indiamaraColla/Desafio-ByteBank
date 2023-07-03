import { useEffect, useState } from 'react';
import { searchBalance } from '../services/balance';

type Balance = number;
type SetBalance = React.Dispatch<React.SetStateAction<Balance>>;
type UseBalanceResult = [Balance, SetBalance];

export default function useBalance(): UseBalanceResult {
  const [balance, setBalance] = useState<Balance>(0);

  const getBalance = async () => {
    const balanceValue = await searchBalance();
    setBalance(balanceValue);
  };

  useEffect(() => {
    getBalance();
  }, []);

  return [balance, setBalance];
}
