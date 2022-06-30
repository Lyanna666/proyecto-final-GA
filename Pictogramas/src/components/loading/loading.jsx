import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import AppContext from '../../AppContext';

const Spinner = (props) => {
  console.log(props);

  const context = useContext(AppContext);

  const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

  // que punto más feo😓
  const Spinner = styled.div`
    display: incline-block;
    border: 0.5rem solid red;
    border-top: 0.5rem solid transparent;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
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
    background-color: rgba(0, 0, 0, 0.6);
  `;

  const SpinnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const SpinnerH1 = styled.h1`
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  `;

  return (
    <>
      <SpinnerBackground>
        <SpinnerContainer>
          <SpinnerH1> {context.language.LOADING_TITLE} </SpinnerH1>
          <Spinner></Spinner>
        </SpinnerContainer>

        <Spinner></Spinner>
      </SpinnerBackground>
    </>
  );
};

export default Spinner;
