import React from "react";
import styled from "styled-components"
import Item from "./Item";

const CartStyled = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

function Cart(props) {

  const cartItem = props.cart && props.cart.map(item => {
    return (
      <Item
      name={item.name}
      quantidade={props.quantidade}
      />
    )
  })
  
  return (
    <div>
      <CartStyled>
        Carrinho:
        {cartItem} 
        Total: R$ 0,00
      </CartStyled>
    </div>
  );
}

export default Cart;