import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Drive from "./Components/Drive";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <SideBar />
        <Routes>
          <Route path="/" element={<Drive/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
display: flex;

`;
