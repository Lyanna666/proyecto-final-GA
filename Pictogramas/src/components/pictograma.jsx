import { Link } from 'react-router-dom';

const Pictograma = props => {
  console.log(props);
  return (
    <Link to={`/dashboard/${props.info.id}`}>
      <h2>Pictograma {props.info.name}</h2>
      <picture>
        <img src={props.info.url} alt={props.info.name} />
      </picture>
    </Link>
  );
};

export default Pictograma;
