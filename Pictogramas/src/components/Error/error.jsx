import './error.css';

import CustomButton from '../elements/customButton';

const Error = props => {
  // Componente que muestra una ventana de error / aviso

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

            {/* Si pops.input es distinto de null, mostramos un formulario, si no, simplemente un botón */}

            {props.input ? (
              <form onSubmit={props.onSubmit}>
                <input
                  type="text"
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
