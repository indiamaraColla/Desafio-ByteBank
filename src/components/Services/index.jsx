import React from 'react';
import Icon from './Icon';
import estilos from './Services.module.css';
import icon from './icon.json';

export default function Services() {
  return (
    <section className="container">
      <div className={estilos.detalhe__superior} />
      <div className={estilos.wrapper}>
        {icon.map((icone) => {
          return <Icon key={icone.servico} estilos={estilos} icone={icone} />;
        })}
      </div>
      <div className={estilos.detalhe__inferior} />
    </section>
  );
}
