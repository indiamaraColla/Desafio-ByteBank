import api from './api';
import { searchBalance, updateBalance } from './balance';

jest.mock('./api');

describe('searchBalance', () => {
  test('should return the balance value if the API request is successful', async () => {
    const mockResponse = { data: { valor: 500 } };
    (api.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await searchBalance();

    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith('/saldo');
    expect(result).toEqual(500);
  });

  test('should return a default balance value of 1000 if the API request fails', async () => {
    (api.get as jest.Mock).mockRejectedValue(new Error('API request failed'));

    const result = await searchBalance();

    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith('/saldo');
    expect(result).toEqual(1000);
  });
});

describe('updateBalance', () => {
  test('should send a PUT request to update the balance', async () => {
    const mockResponse = { status: 200 };
    (api.put as jest.Mock).mockResolvedValue(mockResponse);

    const payload = 500;
    await updateBalance(payload);

    expect(api.put).toHaveBeenCalledTimes(1);
    expect(api.put).toHaveBeenCalledWith('/saldo', { valor: payload });
  });

  test('should log an error message if the API request to update the balance fails', async () => {
    (api.put as jest.Mock).mockRejectedValue(new Error('API request failed'));

    const payload = 500;
    const result = await updateBalance(payload);

    expect(api.put).toHaveBeenCalledTimes(1);
    expect(api.put).toHaveBeenCalledWith('/saldo', { valor: payload });
    expect(result).toEqual('Erro na requisição');
  });
});
