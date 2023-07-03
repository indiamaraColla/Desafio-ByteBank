import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const listaMenu = [
  { link: 'Início', href: '/' },
  { link: 'Cartões', href: '/cards' },
  { link: 'Serviços', href: '/services' },
  { link: 'Investimentos', href: '/investments' },
];

interface MenuProps {
  path: string;
}

export default function Menu({ path }: MenuProps) {
  return (
    <nav className={styles.menu}>
      {listaMenu.map((item, indice) => {
        return (
          <div key={item.href} className={styles.item}>
            <Link
              to={item.href}
              className={`${styles.link} ${
                path === item.href && styles.linkActive
              }`}
            >
              {item.link}
            </Link>
            {indice !== listaMenu.length - 1 && (
              <div className={styles.divider} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
