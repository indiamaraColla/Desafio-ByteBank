import styles from './Cards.module.css';
import cartaoDigital from './digital.svg';
import cartaoFisico from './fisico.svg';

export default function Cards() {
  return (
    <section className="container">
      <div className="detalhe__superior" />
      <div className={styles.wrapper}>
        <h2>Meus cartões</h2>
        <p>Cartão físico</p>
        <div className={styles.cartao}>
          <img src={cartaoFisico} alt="Cartão físico" />
          <div className={styles.funcoes}>
            <button
              className={styles.botaoConfigurar}
              data-testid="card-physical-config"
            >
              Configurar
            </button>
            <button
              className={styles.botaoBloquear}
              data-testid="card-physical-block"
            >
              Bloquear
            </button>
            <span>Função: Débito/Crédito</span>
          </div>
        </div>
        <p>Cartão digital</p>
        <div className={styles.cartao}>
          <img src={cartaoDigital} alt="Cartão digital" />
          <div className={styles.funcoes}>
            <button
              className={styles.botaoConfigurar}
              data-testid="card-digital-config"
            >
              Configurar
            </button>
            <button
              className={styles.botaoBloquear}
              data-testid="card-digital-block"
            >
              Bloquear
            </button>
            <span>Função: Débito</span>
          </div>
        </div>
      </div>
      <div className="detalhe__inferior" />
    </section>
  );
}
