import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PictogramRoutine = props => {
  console.log(props);
  return (
    <>
      <PictogramDiv
        className="pictogram-routine"
        draggable
        onDragStart={e =>
          props.dragStart(
            e,
            {
              id: props.id,
              name: props.name,
            },
            true,
          )
        }
        onDragEnter={e => props.dragEnter(e)}
      >
        {/* <DeleteButton type="button">x</DeleteButton> */}
        <p>{props.name.toUpperCase()}</p>
        <picture draggable="false">
          <img
            draggable="false"
            src={`https://static.arasaac.org/pictograms/${props.id}/${
              props.id
            }_300.png`}
            alt={props.name}
          />
        </picture>
      </PictogramDiv>
    </>
  );
};

export default PictogramRoutine;

const PictogramDiv = styled.div`
  border: 0.08rem solid darkgray;
  margin: 1rem;
  padding: 0.2rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  z-index: -100;
`;
const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  display: inline;
  font-size: 1rem;
  width: 100%;
  text-align: right;
  font-weight: 700;
  pointer: cursor;
  align-self: right;
  color: var(--red);
  &:hover {
    color: var(--dark-red);
  }
`;
