import './error.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../elements/customButton';

import AppContext from '../../AppContext';

const Error = () => {
  const context = useContext(AppContext);

  return (
    <>
      <div className="error-div">
        <div>
          <button onClick="this.remove()" type="button">
            x
          </button>
          <div>
            <h1>Ha ocurrido un error</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <CustomButton color="green" name="Aceptar" size="medium" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
