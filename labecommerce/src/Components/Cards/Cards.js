import React from "react";
import styled from "styled-components";

const DivCard = styled.div`
  img {
    height: 265px;
  }
  width: 50%;
  border: 1px solid var(--color-gray-4);
  box-shadow: 0 4px 8px rgb(68 68 68 / 50%);
  box-sizing: border-box;
  border-radius: 10px;
  padding-bottom: 15px;
  font-size: 1.3rem;
  font-weight: 600;
  
`


function Cards (props) {


  return (
  <div>
    <DivCard>
      <img src={props.card.image} alt=""/>
      <p>{props.card.name}</p>
      <p>{props.card.price}</p>
      <p>{props.card.description}</p>


      <button onClick={() => props.addToCart(props.card)}>Comprar</button>
    </DivCard>




  </div>
  )
}

export default Cards;


