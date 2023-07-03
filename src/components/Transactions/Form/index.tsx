import { useState } from 'react';
import { TransactionsProps } from 'types/Interface/Transactions';
import styles from './Form.module.css';

interface FormProps {
  performTransaction: (transaction: TransactionsProps) => void;
}

export default function Form({ performTransaction }: FormProps) {
  const [formValues, setFormValues] = useState({ transacao: '', valor: '' });

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const updatedvalues = { ...formValues, [name]: value };
    setFormValues(updatedvalues);
  }

  function handleChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    const updatedvalues = { ...formValues, [name]: value };
    setFormValues(updatedvalues);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dataTransaction = new Date().toLocaleDateString('pt-br');
    const monthTransaction = new Date().toLocaleDateString('pt-br', {
      month: 'long',
    });
    performTransaction({
      ...formValues,
      data: dataTransaction,
      mes: monthTransaction[0].toUpperCase() + monthTransaction.substring(1),
    });
    setFormValues({ ...formValues, valor: '' });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <h3 className={styles.legend__options}>Nova Transação</h3>
        <select
          className={styles.group__options}
          onChange={handleChangeSelect}
          name="transacao"
          data-testid="select-opcoes"
        >
          <option defaultValue="Selecione um tipo de transação">
            Selecione um tipo de transação
          </option>
          <option value="Depósito">Depósito</option>
          <option value="Transferência">Transferência</option>
        </select>
      </div>
      <div className={styles.areaValor}>
        <label htmlFor="valor" className={styles.legend}>
          Valor
        </label>
        <input
          onChange={handleChangeInput}
          className={styles.field__value}
          type="number"
          value={formValues.valor}
          name="valor"
          id="valor"
          placeholder="Digite um valor"
          data-testid="form-input"
        />
        <button className={styles.button} type="submit">
          Realizar transação
        </button>
      </div>
    </form>
  );
}
