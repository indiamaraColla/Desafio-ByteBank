import Icon from './Icon/index';
import styles from './Services.module.css';
import icon from './icon.json';

const Services = () => {
  return (
    <section className="container" data-testid="services">
      <div className={styles.top__detail} />
      <div className={styles.wrapper}>
        {icon.map((icone) => {
          return (
            <Icon key={icone.servico} styles={styles.services} icon={icone} />
          );
        })}
      </div>
      <div className={styles.bottom__detail} />
    </section>
  );
};

export default Services;
