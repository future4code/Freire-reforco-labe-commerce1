import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #2d0f63;
  height: 25vh;
  display: flex;
 
    strong{

      padding-left: 20%;
      color: #879ae0;
      font-size: large;

    }

    button{
      padding: 10px;
      margin: 20px;
      justify-content: space-between;
      align-self: center;
      border-radius: 6px;
      color: #2d0f63;
      background-color: #7bb6ed;
      border:#7bb6ed;
      font-weight: bold;
      width: 100px;
      height: 30px;
    } 

`

const Title = styled.h1`
  color: #879ae0;
  font-family: 'Righteous', cursive; 
  display: flex;
  padding: 25px;
  margin-left: 25%;
  font-size: 4.2em; 
  justify-content: center;

`

const Logo = styled.img`
  border-radius: 50%;
  margin-top: 40px;
  margin-left: 30px;
  width: 120px;
  height: 120px;
  display: flex;

`




function Header() {
  return (
    <HeaderContainer>
      <Logo src={"./Img/logo3.png"}/>
      <Title>SpaceX</Title>
      <strong> </strong> 
      <br></br>

      
        <button>Home</button>
        <button>Carrinho</button>
      

    </HeaderContainer>
  );
}

export default Header;