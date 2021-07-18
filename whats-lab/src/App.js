import './App.css';
import styled from "styled-components";
import CreateMessage from "./components/CreateMessage";


const Container = styled.div`
  background-color: green;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <Container>
      <CreateMessage />
    </Container>
  );
}

export default App;
