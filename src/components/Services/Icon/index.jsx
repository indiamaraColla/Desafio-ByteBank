import React from 'react';

export default function Icon({ icon, styles }) {
  return (
    <div className={styles.servicos}>
      <img src={icon.imagem} alt={icon.servico} />
      <h5>{icon.servico}</h5>
    </div>
  );
}
