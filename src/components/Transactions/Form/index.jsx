import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Form({ performTransaction }) {
  const [formValues, setFormValues] = useState({ transacao: '', valor: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedvalues = { ...formValues, [name]: value };
    setFormValues(updatedvalues);
  }

  function handleSubmit(e) {
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
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div>
        <h3 className={styles.legenda__opcoes}>Nova Transação</h3>
        <select
          className={styles.grupo__opcoes}
          onChange={handleChange}
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
        <label htmlFor="valor" className={styles.legenda}>
          Valor
        </label>
        <input
          onChange={handleChange}
          className={styles.campo__valor}
          type="number"
          value={formValues.valor}
          name="valor"
          id="valor"
          placeholder="Digite um valor"
        />
        <button className={styles.botao} type="submit">
          Realizar transação
        </button>
      </div>
    </form>
  );
}
