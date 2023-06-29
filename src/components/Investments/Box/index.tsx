import React, { ReactNode } from 'react';

interface BoxProps {
  styles: string;
  renda: string;
  children: ReactNode;
}

const Box: React.FC<BoxProps> = ({ renda, styles, children }) => {
  return (
    <div className={styles}>
      <p>{renda}</p>
      <h3>{children}</h3>
    </div>
  );
};

export default Box;
