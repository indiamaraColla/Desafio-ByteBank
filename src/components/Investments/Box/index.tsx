import React, { ReactNode } from 'react';
import styles from '../Investments.module.css';

interface BoxProps {
  renda: string;
  children: ReactNode;
}

const Box: React.FC<BoxProps> = ({ renda, children }) => {
  return (
    <div className={styles.income}>
      <p>{renda}</p>
      <h3>{children}</h3>
    </div>
  );
};

export default Box;
