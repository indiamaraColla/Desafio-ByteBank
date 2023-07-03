import { useState } from 'react';
import Icon from './Icon/index';
import styles from './Services.module.css';
import icon from './icon.json';

const Services = () => {
  const [hasService, setHasService] = useState(false);

  const handleButton = () => {
    setHasService(true);
  };

  return (
    <section className="container" data-testid="services">
      <div className={styles.top__detail} />
      <div className={styles.wrapper}>
        {hasService && (
          <h1 className={styles.error}>
            Serviços indisponível no momento, tente novamente mais tarde...{' '}
          </h1>
        )}
        {icon.map((icone) => {
          return (
            <Icon
              key={icone.servico}
              icon={icone}
              handleButton={handleButton}
            />
          );
        })}
      </div>
      <div className={styles.bottom__detail} />
    </section>
  );
};

export default Services;
