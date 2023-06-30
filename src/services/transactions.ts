import { TransactionsProps } from 'types/Interface/Transactions';
import api from './api';

export async function searchTransactions() {
  try {
    const resp = await api.get('/transacoes');
    return resp.data;
  } catch (err) {
    return [];
  }
}

export async function saveTransaction(payload: TransactionsProps) {
  try {
    const resp = await api.post('/transacoes', payload);
    return resp.status;
  } catch (err) {
    return 'Erro na requisição';
  }
}
