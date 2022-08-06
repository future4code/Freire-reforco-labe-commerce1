import React, { useState } from "react";
//import { cards } from "./Components/Cards/Cards";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


function App() {
  //const [card, setCard ] = useState([]);
  //const [cart, setCart] = useState([]);
  //const [totalValue, setTotalValue] = (0);
  //const [minValue, setMinValue] = useState([]) //inserir valor minimo dentro do ()
  //const [maxValue, setMaxValue] = useState() // inserir valor máximo dentro do ()

  //const json = JSON.stringify(card);
  //localStorage.setItem("Cards", json);

  // const cards = cardsList.map(item => {
  //   return <Cards></Cards>
  // })


 

  return (
    <div>
      <Header/>
      <Home/>

      <Footer/>

    </div>
  );
}

export default App;
