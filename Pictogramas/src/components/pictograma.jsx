import { Link } from "react-router-dom";

import "./pictograma.css";

const Pictograma = (props) => {
  console.log(props);
  return (
    <div className="pictograma">
      <h2>Pictograma {props.info.name}</h2>
      <Link to={`/dashboard/${props.info.id}`}></Link>
      <div className="pictograma-img">
        <picture>
          <img src={props.info.url} alt={props.info.name} />
        </picture>
      </div>
    </div>
  );
};

export default Pictograma;
