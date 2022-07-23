import React, { useState, useContext } from 'react';
import Aside from '../components/aside/aside';
import AppContext from '../AppContext';
import styled from 'styled-components';
import Header from '../components/Header/header';
import PictogramRoutine from '../components/table/pictogramRoutine';
import CustomButton from '../components/elements/customButton';
import { fetchAllPictogramsBySearch } from '../api/api-rest';
import Spinner from '../components/loading/loading';
import CustomDeleteButton from '../components/elements/customDeleteButton';

function Routines() {
  const context = useContext(AppContext);
  let dragItem = null;
  const [loading, setLoading] = useState(false);
  const [pictograms, setPictograms] = useState(null);
  const [filas, setFilas] = useState([
    [' ', 'L', 'M', 'X', 'J', 'V', 'S', 'D', ''],
    ['', null, null, null, null, null, null, null, null],
  ]);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  let move = false;
  let parentTd = null;
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

  const dragStart = (e, pictogram, moveInsideTable) => {
    dragItem = pictogram;
    console.log('drag start', e.target.parentNode, moveInsideTable);

    moveInsideTable ? (parentTd = e.target.parentNode) : (parentTd = null);
    move = moveInsideTable;

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

    if (move) {
      const idsParent = parentTd.id.split('-');
      console.log(idsParent);
      temporaryArray[idsParent[0]][idsParent[1]] = null;
    }
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

  const newRow = e => {
    let temporaryArray = filas;
    temporaryArray.push(['', null, null, null, null, null, null, null, null]);

    setFilas(temporaryArray);

    forceUpdate();
  };

  const deleteRow = e => {
    let temporaryArray = filas;
    temporaryArray.splice(e, 1);
    console.log(e);

    setFilas(temporaryArray);
    forceUpdate();
  };

  return (
    <>
      {loading ? <Spinner allWindow={true} /> : <></>}
      <Header />

      <ContainerRoutines>
        <Aside />
        <ContainerDiv>
          <h1>Rutina</h1>
          <DivRoutine>
            <DivForm onSubmit={onSubmitButton}>
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
                            dragStart(
                              e,
                              {
                                id: pictogram._id,
                                name: pictogram.keywords[0].keyword,
                              },
                              false,
                            )
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
              <div className="div-header-table">
                <input type="text" placeholder="Nombre de la tabla" />
                <CustomDeleteButton
                  color="red"
                  onDragOver={event => onDragOver(event)}
                  onDragLeave={event => onDragLeave(event)}
                  onDrop={event => drop(event)}
                />
              </div>
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
                              ) : indexContenido === 8 ? (
                                <>
                                  <CustomDeleteButton
                                    name={indexFilas}
                                    onClick={event => deleteRow(event)}
                                  />
                                </>
                              ) : contenido !== null ? (
                                <>
                                  <PictogramRoutine
                                    dragEnter={dragEnter}
                                    dragStart={dragStart}
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
                {/* <ButtonMore>Eliminar fila</ButtonMore> */}
                <ButtonMore onClick={event => newRow(event)}>
                  Nueva fila
                </ButtonMore>
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
  display: flex;
  background-color: var(--backgroundGrayColor);
  min-height: 80vh;
`;

const DivRoutine = styled.div`
  padding: 1rem;
  display: flex;
`;

const ContainerDiv = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0.09rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  width: 100%;
  min-width: 80%;
`;

const DivForm = styled.div`
  padding: 0.5rem;
  width: 20%;
  margin-right: 1rem;
`;

const DivTable = styled.div`
  width: 80%;
  padding: 0.5rem;
  background-color: var(--gray);
  border-radius: 0.5rem;

  & .div-header-table {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & input {
      flex-grow: 1;
    }

    & > div {
    }
  }
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
  flex-direction: column;
  align-items: center;

  & button {
    width: 100%;
  }
`;

const ButtonMore = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  color: white;
  border-radius: 1rem;
  background-color: var(--green);
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
