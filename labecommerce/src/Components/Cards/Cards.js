import React from "react";
import styled from "styled-components";

const DivCard = styled.div`
  padding: 30px;
  margin: 30px;
  display: flex;
  //justify-content: center;
  flex-direction: column;
  column-gap: 30px;
  
  width: 30%;
  border: 10px solid var(--color-gray-4);
  box-shadow: 0 8px 14px rgb(68 68 68 / 50%);
  box-sizing: border-box;
  border-radius: 12px;
  padding-bottom: 35px;
  padding-left: 75px;
  margin-left: 35%;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.35s ease-in-out;




  
  img {
    height: 265px;
    background-color: grey;
    padding: 2px;
    border-radius: 9px;

  }

  button{
      margin: 10px;
      align-self: center;
      border-radius: 6px;
      color: #2d0f63;
      background-color: #2d0f63;
      color: #879ae0;
      width: 200px;
      height: 30px;
      font-weight: bolder;
    } 

  
`

const PhotoCard = styled.img`
  border-radius: 10px;
  padding: 20px;
  height: 150px;
  width: 260px;

`


function Cards (props) {


  return (
  <div>
    <DivCard>
      <PhotoCard  src={props.card.image} alt=""/>
      <p>{props.card.name}</p>
      <p>{props.card.price}</p>
      <p>{props.card.description}</p>


      <button onClick={() => props.addToCart(props.card)}>Comprar</button>
    </DivCard>




  </div>
  )
}

export default Cards;


