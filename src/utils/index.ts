export const calculateNewBalance = (
  values: {
    transacao: string;
    valor: string;
  },
  balance: number
): number => {
  if (values.transacao === 'Depósito') {
    return balance + parseInt(values.valor);
  } else {
    return balance - parseInt(values.valor);
  }
};
