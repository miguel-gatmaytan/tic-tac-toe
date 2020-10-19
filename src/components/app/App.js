import React from 'react';
import styled from 'styled-components';
import Game from './components/Game';

const AppContainer = styled.div`
  width: 500px;
  margin: auto;
  color: #333;
  text-align: center;
  background: #bdc9cf;
  padding: 25px 50px;
  margin-top: 40px;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
`;

export const App = () => (
  <AppContainer>
    <h1>Tic Tac Toe!</h1>
    <Game />
  </AppContainer>
);

export default App;
