import './error.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../elements/customButton';

import AppContext from '../../AppContext';

const Error = props => {
  const context = useContext(AppContext);
  console.log(props);

  return (
    <>
      <div className="error-div">
        <div>
          <button onClick={props.onClickClose} type="button">
            x
          </button>
          <div>
            <h1>{props.title}</h1>
            <p>{props.errorProps}</p>
            <CustomButton
              color="green"
              name={props.button}
              size="medium"
              onClick={props.onClickRestart}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
