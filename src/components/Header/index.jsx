import React from 'react';
import avatarUsuario from '../../assets/avatar.svg';
import { ReactComponent as Logo } from '../../assets/bytebank.svg';
import estilos from './Header.module.css';

export default function Header() {
  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.container}>
        <Logo />
        <div className={estilos.usuario}>
          <p>Joana Fonseca Gomes</p>
          <img src={avatarUsuario} alt="Ícone de um avatar de usuário" />
        </div>
      </div>
    </header>
  );
}
