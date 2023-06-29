import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const listaMenu = [
  { link: 'Início', href: '/' },
  { link: 'Cartões', href: '/cards' },
  { link: 'Serviços', href: '/services' },
  { link: 'Investimentos', href: '/investments' },
];

export default function Menu({ path }) {
  return (
    <nav className={styles.menu}>
      {listaMenu.map((item, indice) => {
        return (
          <div key={item.href} className={styles.item}>
            <Link
              to={item.href}
              className={`${styles.link} ${
                path === item.href && styles.linkAtivo
              }`}
            >
              {item.link}
            </Link>
            {indice !== listaMenu.length - 1 && (
              <div className={styles.divisor} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
