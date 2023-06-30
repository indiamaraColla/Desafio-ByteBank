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
  api
    .put('/saldo', { valor: payload })
    .then((resp) => console.log(resp.status))
    .catch((err) => console.log(err));
}
