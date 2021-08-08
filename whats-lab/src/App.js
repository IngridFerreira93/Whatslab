import React from "react";
import styled from "styled-components";
import CreateMessage from "./components/CreateMessage";

const MainContainer = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <CreateMessage />
    </MainContainer>
  );
}

export default App;
