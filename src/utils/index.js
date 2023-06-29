export const calculateNewBalance = (valores, saldo) => {
  if (valores.transacao === 'Depósito') {
    return saldo + parseInt(valores.valor);
  } else {
    return saldo - parseInt(valores.valor);
  }
};
