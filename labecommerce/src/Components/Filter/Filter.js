import React from "react";
////import Header from "./Components/Header/Header";

//import Footer from "../Footer/Footer";


function Filter(props) {
  // const [dados, setDados] = useState(cards)
  // const [minValue, setMinValue] = useState([])
  // const [maxValue, setMaxValue] = useState([])
  // const [findName, setFindNaame] = useState("")

  const filterResult = 

  return (
    <FilterContainer>
    <div>
      <InputFind
        type="text"
        placeholder="Buscar por Nome"
        value={props.findName}
        onChange={props.onChangeFindName}
      />

      <InputMinMax
        type="number"
        placeholder="Preço Mínimo"
        value={props.minValue}
        onChange={props.onChangeMinValue}
      />

      <InputMinMax
        type="number"
        placeholder="Preço Máximo"
        value={props.maxValue}
        onChange={props.onChangeMaxValue}
      />
      

    </div>
    </FilterContainer>
  );
}

export default Filter;

