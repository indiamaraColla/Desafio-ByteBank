export const calculateNewBalance = (values, balance) => {
  if (values.transacao === 'Depósito') {
    return balance + parseInt(values.valor);
  } else {
    return balance - parseInt(values.valor);
  }
};
