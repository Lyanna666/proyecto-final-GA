import './customButton.css';

import { Link } from 'react-router-dom';

// Esto es un componente de un botón. Se le pasa el color, nombre, tamaño, tipo y onClick el
// Por defecto es tamaño medio y color azul.

const CustomLink = ({
  color = 'blue',
  size = 'medium',
  name = 'name',
  url = '#',
}) => {
  return (
    <Link className={`custom-button ${color} ${size} link-button`} to={url}>
      {name}
    </Link>
  );
};
export default CustomLink;
