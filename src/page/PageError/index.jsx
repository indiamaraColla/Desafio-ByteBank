import React from 'react';
import { Link } from 'react-router-dom';
import espaco from './404.svg';
import estilos from './PageError.module.css';

export default function PageError() {
  return (
    <div data-testid="pagina-404" className={estilos.container}>
      <h1>Ops! Não encontramos a página</h1>
      <p>
        E olha que exploramos o universo procurando por ela! Que tal voltar e
        tentar novamente?
      </p>
      <Link to="/" className={estilos.link}>
        Voltar ao início
      </Link>
      <img src={espaco} alt="Imagem ilustrativa do espaço" />
    </div>
  );
}
