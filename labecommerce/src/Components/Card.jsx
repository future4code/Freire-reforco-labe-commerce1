import React from 'react'
import products from '../Products/products.json';

function Card() {

    return (
        // products.map((product) => {
        //     <div>
        //         {/* <img src={product.img} alt={product.nome} /> */}    
        //         <h3>{product.nome}</h3>
        //         <h4>{product.valor}</h4>
        //         {/* <button onClick={props.adToCart}>Adicionar ao Carrinho</button>  */}
        //     </div>
        // })
    //    <h1> {products[0].nome}</h1>
       <img src={products[0].img} alt={products[0].nome} /> 
    )
}
export default Card;
