import styled from "styled-components";
import bg from './images/download.png';
import {MainLayout} from './styles/Layouts';
function App() {
  return (
   <Appstyled className="App">
    <MainLayout>
      <h1>Hello</h1>
    </MainLayout>
   </Appstyled>
  );
}

const Appstyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;

export default App;
