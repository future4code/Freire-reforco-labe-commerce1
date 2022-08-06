import React from 'react';

function Filters () {
    return (
        <div>
            <h1><b>Filtros</b></h1>
            <p>Valor minimo:</p>
            <input type="text" placeholder=''/>
            <p>Valor máximo:</p>
            <input type="text" placeholder=''/>
            <p>Busca por nome</p>
            <input type="text" placeholder=''/>
        </div>
    )
}

export default Filters;