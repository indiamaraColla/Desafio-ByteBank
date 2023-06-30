import api from './api';

export async function searchBalance() {
  try {
    const resp = await api.get('/saldo');
    return resp.data.valor;
  } catch (err) {
    return 1000;
  }
}

export async function updateBalance(payload: number) {
  try {
    const resp = await api.put('/saldo', { valor: payload });
    return resp;
  } catch (err) {
    return 'Erro na requisição';
  }
}
