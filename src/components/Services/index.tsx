import { useState } from 'react';
import Icon from './Icon/index';
import styles from './Services.module.css';
import icon from './icon.json';

interface IconProps {
  imagem: string;
  servico: string;
}

const Services = () => {
  const [hasService, setHasService] = useState<boolean>(false);

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
        {icon.map((item: IconProps) => {
          return (
            <Icon key={item.servico} icon={item} handleButton={handleButton} />
          );
        })}
      </div>
      <div className={styles.bottom__detail} />
    </section>
  );
};

export default Services;
