import React, {useState} from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
  font-size: 1rem;

`
const InputQuery= styled.button`
  width: 100%;
  border-radius: 6px;
  font-size: 1rem;
  border: 1px solid var(--color-gray-4);
  

`
const InputMinMax= styled.button`
  width: 100%;
  border: 1px solid var(--color-gray-4);
  border-radius: 6px;
  font-size: 1rem;
  

`
const InputOrd= styled.button`
  width: 10%;
  border: 1px solid var(--color-gray-4);
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 1.3rem;
  font-weight: 600;
  justify-content: center;

    option{ 
      font-size: 1.3rem;
      color: #2d0f63;
    }
    select{ 
      font-size: 1.2rem;
      color: #2d0f63;
      border-radius: 8px;
    }

`

function Filter(props) {

   const [minValue, setMinValue] = useState([])
   const [maxValue, setMaxValue] = useState([])
   const [ord, setOrd] = useState("");


  return (
    <FilterContainer>
    <div>
      <InputQuery
        type="text"
        placeholder="Pesquisa"
        value={props.query}
        onChange={(event) =>{props.setQuery(event.target.value)}}
      />

      <InputMinMax
        type="number"
        placeholder="Preço Mínimo"
        value={props.minValue}
        onChange={(event) => {props.setMinValue(event.target.value)}}
      />

      <InputMinMax
        type="number"
        placeholder="Preço Máximo"
        value={props.maxValue}
        onChange={(event) => {props.setMaxValue(event.target.value)}}
      />
      

    </div>
    <InputOrd>
      <label></label>
      <select onChange={(event) => {props.setOrd(event.target.value)}}>
        <option>Ordenação</option>
        <option value={"Menor Preço"}>Menor Preço</option>
        <option value={"Maior Preço"}>Maior Preço</option>
      </select>

    </InputOrd>
    </FilterContainer>
    
  );
}

export default Filter;

