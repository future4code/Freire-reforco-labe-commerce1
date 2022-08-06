import React from "react";
import styled from "styled-components";


const StyledItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

        p{ 
            margin: 10px 0;
        }
    border-radius: 8px;
    border: solid 1px;
    padding: 10px;
    margin: 10px;

`


function Item(props) {
    return(

        <StyledItem>
            <p>{props.name}</p>
            <p>Quantidade: </p>
        </StyledItem>        
    )
}

export default Item;