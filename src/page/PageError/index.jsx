import React from 'react';
import { Link } from 'react-router-dom';
import imageNotFound from './404.svg';
import styles from './PageError.module.css';

export default function PageError() {
  return (
    <div data-testid="pagina-404" className={styles.container}>
      <h1>Ops! Não encontramos a página</h1>
      <p>
        E olha que exploramos o universo procurando por ela! Que tal voltar e
        tentar novamente?
      </p>
      <Link to="/" className={styles.link}>
        Voltar ao início
      </Link>
      <img src={imageNotFound} alt="Imagem ilustrativa do espaço" />
    </div>
  );
}
