import styled from "styled-components";
import bg from './images/Plain-image.avif';
import {MainLayout} from './styles/Layouts';
import Orb from "./components/Orb/Orb";

function App() {
  return (
   <Appstyled  bg={bg} className="App">
    <Orb />
    <MainLayout>
    
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
