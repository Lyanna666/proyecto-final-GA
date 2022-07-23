import Error from './error';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Error', () => {
  // Test para verificar que el componente se renderiza correctamente
  // useContext no funciona en test
  // const context = useContext(AppContext);

  const ERROR_TITLE = 'Ha ocurrido un error';
  const ERROR_LOGIN =
    'Esta funcionalidad todavía no está implementada en la versión actual de la aplicación.';

  it('render error when click on Login', () => {
    // Given
    // When
    render(
      //  <BrowserRouter>
      <Error title={ERROR_TITLE} errorProps={ERROR_LOGIN} />,
      // ,
      {
        /* </BrowserRouter>, */
      },
    );

    // Then
    const title = screen.getByText(ERROR_TITLE);
    const errorText = screen.getByText(ERROR_LOGIN);

    expect(title).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
  });
});
