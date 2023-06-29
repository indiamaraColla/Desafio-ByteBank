import { useEffect, useState } from 'react';
import { searchBalance } from '../services/balance';

export default function useBalance() {
  const [saldo, setSaldo] = useState(0);

  async function obtemSaldo() {
    setSaldo(await searchBalance());
  }

  useEffect(() => {
    obtemSaldo();
  }, [saldo]);

  return [saldo, setSaldo];
}
