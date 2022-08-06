import React from "react";
import Home from './Components/Home'
import Styled from 'styled-components'
import Cart from './Components/Cart'
import Filters from './Components/Filters'

const Container = Styled.div`
  display: flex;
  justify-content: space-around;
  
`


function App() {
  return (
    <Container>
      <Filters />
      <Home />
      <Cart />
    </Container>
  );
}

export default App;
