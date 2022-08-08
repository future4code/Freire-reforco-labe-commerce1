import React from "react";
import styled from "styled-components"
import Item from "./Item";

const CartStyled = styled.div`
  border: 1px solid #a9bdeb;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  width: 30%;
  background-color: #a9bdeb;
`

function Cart(props) {

  const cartItem = props.cart && props.cart.map(item => {
    return (
      <Item
      name={item.name}
      price={props.price}
      />
    )
  })

  return (
    <div>
      <CartStyled>
        Carrinho -
        {cartItem} 
        Total: R$ {props.price}
      </CartStyled>
    </div>
  );
}

export default Cart;