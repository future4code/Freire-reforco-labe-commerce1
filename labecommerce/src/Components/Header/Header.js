import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: blueviolet;

  /* button{
    display: flex;
	  margin-bottom: 500px;
    margin-left: 950px;
    position: absolute;

  } */

`




function Header() {
  return (
    <HeaderContainer>

      <h1>SpaceX</h1>
      <strong>A maior empresa de viagens espaciais </strong> 
      <br></br>

      
        <button>Home</button>
        <button>Carrinho</button>
      

    </HeaderContainer>
  );
}

export default Header;