import styles from './Cards.module.css';
import cartaoDigital from './digital.svg';
import cartaoFisico from './fisico.svg';

interface CardData {
  type: string;
  image: string;
  function: string;
  configTestId: string;
  blockTestId: string;
}

const cardsData: CardData[] = [
  {
    type: 'físico',
    image: cartaoFisico,
    function: 'Débito/Crédito',
    configTestId: 'card-physical-config',
    blockTestId: 'card-physical-block',
  },
  {
    type: 'digital',
    image: cartaoDigital,
    function: 'Débito',
    configTestId: 'card-digital-config',
    blockTestId: 'card-digital-block',
  },
];

export default function Cards() {
  return (
    <section className="container">
      <div className="top__detail" />
      <div className={styles.wrapper}>
        <h2>Meus cartões</h2>
        {cardsData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div>
              <p>Cartão {card.type}</p>
              <img src={card.image} alt={`Cartão ${card.type}`} />
            </div>
            <div className={styles.groupButton}>
              <button
                className={styles.buttonConfig}
                data-testid={card.configTestId}
              >
                Configurar
              </button>
              <button
                className={styles.buttonBlock}
                data-testid={card.blockTestId}
              >
                Bloquear
              </button>
              <span>Função: {card.function}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom__detail" />
    </section>
  );
}
