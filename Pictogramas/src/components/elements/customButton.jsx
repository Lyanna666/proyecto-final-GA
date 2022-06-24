import './customButton.css';

// Esto es un componente de un botón. Se le pasa el color, nombre, tamaño, tipo y onClick el
// Por defecto es tamaño medio y color azul.

const CustomButton = ({
  color = 'blue',
  name = 'name',
  size = 'medium',
  type = null,
  onClick,
}) => {
  const onButtonClick = () => {
    if (onClick) {
      onClick(name);
    }
  };
  return (
    <div className="button-container">
      <button
        className={`custom-button ${color} ${size} ${type}`}
        onClick={onButtonClick}
      >
        {name}
      </button>
    </div>
  );
};
export default CustomButton;
