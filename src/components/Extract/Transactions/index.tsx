interface TransactionsProps {
  item: {
    mes: string;
    transacao: string;
    data: string;
    valor: string;
  };
  styles: {
    mes: string;
    transacao: string;
    valor: string;
    divisor: string;
  };
}

export default function Transactions({ item, styles }: TransactionsProps) {
  return (
    <li>
      <p className={styles.mes}>{item.mes}</p>
      <div className={styles.transacao}>
        <p data-testid="tipoTransacao">{item.transacao}</p>
        <span>{item.data}</span>
      </div>
      {item.transacao === 'Transferência' ? (
        <h3
          data-testid="valorTransacao"
          className={styles.valor}
        >{`- R$ ${item.valor}`}</h3>
      ) : (
        <h3
          data-testid="valorTransacao"
          className={styles.valor}
        >{` R$ ${item.valor}`}</h3>
      )}
      <div className={styles.divisor} />
    </li>
  );
}
