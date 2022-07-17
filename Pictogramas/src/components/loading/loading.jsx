import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import AppContext from '../../AppContext';

const Spinner = props => {
  const context = useContext(AppContext);

  return (
    <>
      {props.allWindow ? (
        <SpinnerBackground>
          <SpinnerContainer>
            <SpinnerH1> {context.language.LOADING_TITLE} </SpinnerH1>
            <Spiner />
          </SpinnerContainer>

          <Spiner />
        </SpinnerBackground>
      ) : (
        <SpinnerBackgroundRelative>
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        </SpinnerBackgroundRelative>
      )}
    </>
  );
};

export default Spinner;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const Spiner = styled.div`
  display: incline-block;
  border: 0.4rem solid var(--green);
  border-top: 0.4rem solid transparent;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spin} 0.6s linear infinite;
`;

const SpinnerBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;

const SpinnerBackgroundRelative = styled.div`
  width: 100%;
  z-index: 100;
  // background-color: rgba(0, 0, 0, 0.6);
`;

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpinnerH1 = styled.h1`
  color: white;
  font-weight: 600;
  text-align: center;
`;
