import { TransactionsProps } from 'types/Interface/Transactions';
import api from './api';
import { saveTransaction, searchTransactions } from './transactions';

jest.mock('./api');

const mockTransacao = {
  data: [
    {
      transacao: 'Depósito',
      valor: '100',
      data: '22/11/2022',
      mes: 'Novembro',
    },
  ],
};

describe('searchTransactions', () => {
  it('should return transactions data', async () => {
    (api.get as jest.Mock).mockResolvedValue(Promise.resolve(mockTransacao));

    const result = await searchTransactions();

    expect(api.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTransacao.data);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
  });

  it('should return an empty array on error', async () => {
    (api.get as jest.Mock).mockRejectedValue(new Error('API error'));

    const result = await searchTransactions();

    expect(api.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
  });
});

describe('saveTransaction', () => {
  test('should send a POST request to save the transaction', async () => {
    const mockResponse = { status: 201 };
    (api.post as jest.Mock).mockResolvedValue(mockResponse);

    const payload: TransactionsProps = {
      transacao: 'Depósito',
      valor: '100',
      data: '22/11/2022',
      mes: 'Novembro',
    };
    const result = await saveTransaction(payload);

    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('/transacoes', payload);
    expect(result).toEqual(201);
  });

  test('should return an error message if the API request to save the transaction fails', async () => {
    (api.post as jest.Mock).mockRejectedValue(new Error('API request failed'));

    const payload: TransactionsProps = {
      transacao: 'Transferencia',
      valor: '100',
      data: '22/11/2022',
      mes: 'Novembro',
    };
    const result = await saveTransaction(payload);

    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('/transacoes', payload);
    expect(result).toEqual('Erro na requisição');
  });
});
