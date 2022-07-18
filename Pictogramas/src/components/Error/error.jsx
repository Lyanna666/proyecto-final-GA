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
            <h1>{context.language.ERROR_TITLE}</h1>
            <p>{props.errorProps.message}</p>
            <CustomButton
              color="green"
              name={context.language.ERROR_BUTTON_TEXT}
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
