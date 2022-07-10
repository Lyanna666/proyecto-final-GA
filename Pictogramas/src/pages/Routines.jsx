import React, {
  updateState,
  useRef,
  useEffect,
  useState,
  useContext,
} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import styled from 'styled-components';
import Header from '../components/Header/header';
import PictogramRoutine from '../components/table/pictogramRoutine';
import CustomButton from '../components/elements/customButton';
import { fetchAllPictogramsBySearch } from '../api/api-rest';
import Spinner from '../components/loading/loading';

function Routines() {
  const context = useContext(AppContext);
  let dragItem = null;
  const [loading, setLoading] = useState(false);
  const [pictograms, setPictograms] = useState(null);
  const [filas, setFilas] = useState([
    [' ', 'L', 'M', 'X', 'J', 'V', 'S', 'D'],
    [null, null, null, null, null, null, null, null],
  ]);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  // useEffect(() => {
  //   setFilas([
  //     [' ', 'L', 'M', 'X', 'J', 'V', 'S', 'D'],
  //     [null, null, null, null, null, null, null, null],
  //   ]);
  // }, []);

  function getPictograms(searchText) {
    setLoading(true);
    fetchAllPictogramsBySearch(searchText, context.language.LANGUAGE)
      .then(data => {
        setPictograms(data);
        console.log(data);
        setLoading(false);
      })
      .catch(error => {
        setPictograms(null);
        console.error(error);
        setLoading(false);
      });
  }

  function onSubmitButton(event) {
    // entender preventDefault()
    event.preventDefault();
    const value = event.target[0].value;
    if (value.length > 0) {
      getPictograms(value);
    }
  }

  const dragStart = (e, pictogram) => {
    dragItem = pictogram;
    console.log('drag start', dragItem);
    // e.preventDefault();
  };

  const dragEnter = (e, position) => {
    e.preventDefault();
    // console.log('Dragenter', e, position);
  };

  const onDragOver = e => {
    e.preventDefault();
    // console.log('Grag over', e);

    e.target.setAttribute('drop-active', true);
  };

  const drop = e => {
    const ids = e.target.id.split('-');
    e.preventDefault();
    e.target.setAttribute('drop-active', false);
    let temporaryArray = filas;
    temporaryArray[ids[0]][ids[1]] = dragItem;
    console.log(temporaryArray);
    // createDivPictogram(e.target);
    setFilas(temporaryArray);
    console.log('State', filas);
    forceUpdate();
  };

  const onDragLeave = ev => {
    ev.preventDefault();
    ev.target.setAttribute('drop-active', false);
    // console.log('Leave', ev);
  };

  return (
    <>
      {loading ? <Spinner allWindow={true} /> : <></>}
      <Header />
      <ContainerRoutines>
        <ContainerDiv>
          <h1>Rutina</h1>
          <DivRoutine>
            <DivForm onSubmit={onSubmitButton}>
              <h2>Buscar pictogramas</h2>
              <CustomForm>
                <input type="text" placeholder="Buscar pictograma" />
                <CustomButton type="submit" value="search" name="Buscar" />
              </CustomForm>
              <DivImagesPictograms>
                {pictograms != null ? (
                  <>
                    {pictograms.map(pictogram => (
                      <DivPictogram>
                        <div
                          draggable
                          key={pictogram._id}
                          onDragStart={e =>
                            dragStart(e, {
                              id: pictogram._id,
                              name: pictogram.keywords[0].keyword,
                            })
                          }
                          onDragEnter={e => dragEnter(e)}
                        >
                          <h3>{pictogram.keywords[0].keyword}</h3>
                          <picture draggable="false">
                            <img
                              draggable="false"
                              src={`https://static.arasaac.org/pictograms/${
                                pictogram._id
                              }/${pictogram._id}_300.png`}
                              alt={pictogram.keywords[0].keyword}
                            />
                          </picture>
                        </div>
                      </DivPictogram>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </DivImagesPictograms>
            </DivForm>
            <DivTable>
              <h2>Tabla</h2>
              <div>
                <TableRoutine>
                  {filas.map((fila, indexFilas) => (
                    <tbody>
                      <tr>
                        {fila.map((contenido, indexContenido) =>
                          indexFilas === 0 ? (
                            <th>{contenido}</th>
                          ) : (
                            <TdTableRoutine
                              id={`${indexFilas}-${indexContenido}`}
                              key={`${indexFilas}-${indexContenido}`}
                              onDragOver={event => onDragOver(event)}
                              onDragLeave={event => onDragLeave(event)}
                              onDrop={event => drop(event)}
                            >
                              {indexContenido === 0 ? (
                                <>
                                  <InputTable placeholder="texto aqui" />
                                </>
                              ) : contenido !== null ? (
                                <>
                                  <PictogramRoutine
                                    id={contenido.id}
                                    name={contenido.name}
                                  />
                                </>
                              ) : (
                                <></>
                              )}
                            </TdTableRoutine>
                          ),
                        )}
                      </tr>
                    </tbody>
                  ))}
                </TableRoutine>
                <ButtonMore>Eliminar fila</ButtonMore>
                <ButtonMore>Añadir nueva fila</ButtonMore>
              </div>
            </DivTable>
          </DivRoutine>
        </ContainerDiv>
      </ContainerRoutines>
    </>
  );
}

export default Routines;

const ContainerRoutines = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: var(--backgroundGrayColor);
  min-height: 80vh;
`;

const DivRoutine = styled.div`
  padding: 1rem;
  display: flex;
`;

const ContainerDiv = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;

  width: 100%;
  background-color: white;
  box-shadow: 0.09rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
`;

const DivForm = styled.div`
  padding: 0.5rem;
  width: 25%;
  margin-right: 1rem;
`;

const DivTable = styled.div`
  width: 75%;

  padding: 0.5rem;
  background-color: var(--gray);
  border-radius: 0.5rem;
`;

const TableRoutine = styled.table`
  width: 100%;
  background: var(--backgroundGrayColor);
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0.6rem;
`;

const TdTableRoutine = styled.td`
  background-color: white;
  height: 7rem;
  border-radius: 0.2rem;
  box-shadow: 0.09rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  &[drop-active='true'] {
    border: 0.07rem solid var(--green);
  }
`;

const InputTable = styled.input`
  width: 100%;
  text-align: center;
  color: var(--blue);
  height: 100%;
  margin: 0;
  padding: 0.5rem;
  border: none;
`;

const CustomForm = styled.form`
  display: flex;
  align-items: center;
`;

const ButtonMore = styled.button`
  width: 100%;
  font-size: 1rem;
  border: none;
  background-color: lightgray;
`;

const DivPictogram = styled.div`
  border: 0.06rem solid lightgray;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 0.7rem;
  width: 32%;
  padding: 0;
  margin-bottom: 0.5rem;

  & > div {
    width: 100%;
    margin: 0;
    height: 100%;
    border-radius: 0.5rem;
    border: 0.06rem solid lightgray;
  }
`;

const DivImagesPictograms = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
