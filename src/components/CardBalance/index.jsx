import React from 'react';
import Balance from './Balance';
import estilos from './CardBalance.module.css';
import { ReactComponent as Ilustracao } from './ilustracao.svg';

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export default function CardBalance({ saldo }) {
  return (
    <section className={estilos.container}>
      <div className={estilos.detalhe__superior} />
      <h1 className={estilos.titulo}>Olá, Joana :)!</h1>
      <p data-testid="data-atual" className={estilos.data}>{`${
        diasDaSemana[hoje.getDay()]
      }, ${hoje.toLocaleDateString('pt-BR')}`}</p>
      <div className={estilos.wrapper}>
        <Ilustracao className={estilos.ilustracao} width="250" height="225" />
        <Balance saldo={saldo} />
      </div>
      <div className={estilos.detalhe__inferior} />
    </section>
  );
}
