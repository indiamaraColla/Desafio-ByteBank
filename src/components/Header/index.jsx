import React from 'react';
import avatarUsuario from '../../assets/avatar.svg';
import { ReactComponent as Logo } from '../../assets/bytebank.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.usuario}>
          <p>Joana Fonseca Gomes</p>
          <img src={avatarUsuario} alt="Ícone de um avatar de usuário" />
        </div>
      </div>
    </header>
  );
}
