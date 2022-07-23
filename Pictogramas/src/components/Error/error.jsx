import './error.css';
import { useState } from 'react';

import CustomButton from '../elements/customButton';

const Error = props => {
  console.log(props);
  // const [inputValue, setInputValue] = useState('');

  // const onButtonClick = event => {
  //   if (props.onClickRestart && inputValue) {
  //     props.onClickRestart();
  //   }
  // };

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
            {props.input ? (
              <form onSubmit={props.onSubmit}>
                <input
                  type="text"
                  // handleChange={e => setInputValue(e.target.value)}
                  name="user"
                  required
                  placeholder={props.input}
                />
                <CustomButton
                  color="green"
                  name={props.button}
                  size="medium"
                  type={props.type ? props.type : 'button'}
                />
                {/* // onClick={props.onClickRestart} */}
              </form>
            ) : (
              <>
                <CustomButton
                  color="green"
                  name={props.button}
                  size="medium"
                  type={props.type ? props.type : 'button'}
                  onClick={props.onClickRestart}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
