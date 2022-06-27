import { Link } from "react-router-dom";

import "./pictograma.css";

const Pictograma = (props) => {
  console.log(props);
  return (
<<<<<<< HEAD
    <div className="pictograma">
      <h2>Pictograma {props.info.name}</h2>
      <Link to={`/dashboard/${props.info.id}`}></Link>
      <div className="pictograma-img">
        <picture>
          <img src={props.info.url} alt={props.info.name} />
        </picture>
      </div>
    </div>
=======
    <>
      <h2>Pictograma</h2>
      <picture />
    </>
>>>>>>> a7f673ee1298388ce2cf227cae9d91678c9d6d8e
  );
};

export default Pictograma;
