import React from 'react'
import Styled from 'styled-components'
// import Card from './Card';

const ContainerHome = Styled.div`
    display: flex;
    justify-content: space-evenly;
 
`
const OrderAndSelect = Styled.div`
    display: flex;
   
`
function Home() {
    return (
        <ContainerHome>
            <div>
                <p><b>Quantidade de Produtos</b></p>
            </div>
            <OrderAndSelect>
                <p><b>Ordenação </b>: </p>
                <select>
                    <option value="Crescente">Crescente</option>
                    <option value="Decrescente">Decrescente</option>
                </select>
            </OrderAndSelect>
        </ContainerHome>
    )
}
export default Home;