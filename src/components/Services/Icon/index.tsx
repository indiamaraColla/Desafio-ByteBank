import styles from '../Services.module.css';

interface IconProps {
  icon: {
    imagem: string;
    servico: string;
  };
  handleButton: () => void;
}

const Icon = ({ icon, handleButton }: IconProps) => {
  return (
    <button
      className={styles.services}
      data-testid={`service-icon-${icon.servico}`}
      onClick={handleButton}
    >
      <img src={icon.imagem} alt={icon.servico} />
      <h5>{icon.servico}</h5>
    </button>
  );
};

export default Icon;
