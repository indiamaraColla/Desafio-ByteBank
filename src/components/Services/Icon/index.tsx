interface IconProps {
  icon: {
    imagem: string;
    servico: string;
  };
  styles: string;
}

const Icon = ({ icon, styles }: IconProps) => {
  return (
    <div className={styles} data-testid={`service-icon-${icon.servico}`}>
      <img src={icon.imagem} alt={icon.servico} />
      <h5>{icon.servico}</h5>
    </div>
  );
};

export default Icon;
