import styles from './Cards.module.css';
import cartaoDigital from './digital.svg';
import cartaoFisico from './fisico.svg';

export default function Cards() {
  return (
    <section className="container">
      <div className="top__detail" />
      <div className={styles.wrapper}>
        <h2>Meus cartões</h2>
        <p>Cartão físico</p>
        <div className={styles.card}>
          <img src={cartaoFisico} alt="Cartão físico" />
          <div className={styles.groupButton}>
            <button
              className={styles.buttonConfig}
              data-testid="card-physical-config"
            >
              Configurar
            </button>
            <button
              className={styles.buttonBlock}
              data-testid="card-physical-block"
            >
              Bloquear
            </button>
            <span>Função: Débito/Crédito</span>
          </div>
        </div>
        <p>Cartão digital</p>
        <div className={styles.card}>
          <img src={cartaoDigital} alt="Cartão digital" />
          <div className={styles.funcoes}>
            <button
              className={styles.buttonConfig}
              data-testid="card-digital-config"
            >
              Configurar
            </button>
            <button
              className={styles.buttonBlock}
              data-testid="card-digital-block"
            >
              Bloquear
            </button>
            <span>Função: Débito</span>
          </div>
        </div>
      </div>
      <div className="bottom__detail" />
    </section>
  );
}
