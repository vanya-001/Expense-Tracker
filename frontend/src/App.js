import styled from "styled-components";
import bg from './images/p.png';
import {MainLayout} from './styles/Layouts';
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import React, {useState, useMemo} from 'react';
import Dashboard from "./components/Dashboard/Dashboard";
import Expenses from "./components/Expenses/Expenses";
import Incomes from "./components/Incomes/Incomes";
import { GlobalProvider, useGlobalContext } from "./context/globalContext";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp/SignUp";


function App() {
  const [active, setActive] = useState(1)

  // const global = useGlobalContext()
  // console.log(global);

  // const displayData = () => {
  //   switch(active){
  //     case 1:
  //       return <Login />
  //     case 2:
  //       return <Dashboard />
  //     case 3:
  //       return <Incomes />
  //     case 4: 
  //       return <Expenses />
  //     default: 
  //       return <Dashboard />
  //   }
  // }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <Router>
    <GlobalProvider>
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          <Routes>
            <Route exact path = "/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path = "/Incomes" element={<Incomes />} />
            <Route path = "/Expenses" element={<Expenses />} />
            <Route path = "/SignUp" element={<SignUp />} />
          </Routes>
          {/* {displayData()} */}
        </main>
      </MainLayout>
    </AppStyled>
    </GlobalProvider>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
  @media (max-width: 768px) {
    border-width: 1px;
    border-radius: 16px;
  }
`;

export default App;
