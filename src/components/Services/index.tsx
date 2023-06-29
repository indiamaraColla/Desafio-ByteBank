import Icon from './Icon/index';
import styles from './Services.module.css';
import icon from './icon.json';

const Services = () => {
  return (
    <section className="container">
      <div className={styles.detalhe__superior} />
      <div className={styles.wrapper}>
        {icon.map((icone) => {
          return (
            <Icon key={icone.servico} styles={styles.servicos} icon={icone} />
          );
        })}
      </div>
      <div className={styles.detalhe__inferior} />
    </section>
  );
};

export default Services;
