import React, { useState } from "react";
import Cards from "./Components/Cards/Cards";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart"


function App() {
  const [cardList, setCardList ] = useState([
    {
      id: 1,
      name: "Planeta Vermelho - Marte",
      price: 2000000,
      description: " Marte, o quarto planeta no sistema solar, guarda mistérios que pouco a pouco vão sendo revelados",
      image: "Freire-reforco-labe-commerce1/labecommerce/public/Img/mars.jpg"
  
  },
  {
      id: 2,
      name: "Vênus",
      price: 3000000,
      description: "Vênus é o mais quente do Sistema Solar e um dos mais brilhantes do céu, perdendo apenas para a Lua.",
      image: "Freire-reforco-labe-commerce1/labecommerce/public/Img/venus.jpg"
  },

  {
    id: 3,
    name: "Lua",
    price: 500000,
    description: "Que tal conhecer o satélite natural da Terra?",
    image: "Freire-reforco-labe-commerce1/labecommerce/public/Img/moon.jpg"
  },

  {
    id: 4,
    name: "Saturno",
    price: 7000000,
    description: "O planeta com o maior número de luas do Sistema Solar",
    image: "Freire-reforco-labe-commerce1/labecommerce/public/Img/saturn.jpg"
  },
  
  ]);


  //const [cart, setCart] = useState([]);
  //const [totalValue, setTotalValue] = (0);
  //const [minValue, setMinValue] = useState([]) //inserir valor minimo dentro do ()
  //const [maxValue, setMaxValue] = useState() // inserir valor máximo dentro do ()

  //const json = JSON.stringify(card);
  //localStorage.setItem("Cards", json);

  const [cart, setCart] = useState([]);
  //const [totalValue, setTotalValue] = (0);

  //Função para adicionar o item(viagem) ao carrinho:
  const addToCart = (card) => {
    const newCart = [...cart, card]
    setCart(newCart)
  }

  const card = cardList.map(item => {
    return (
    <Cards 
      card={item}
      addToCart={addToCart}
    
    />

  )})



 

  return (
    <div>
      <Header/>
      <Home/>

      {card}
      <br></br>
      <Cart>cart={cart}</Cart>

      <Footer/>

    </div>
  );
}

export default App;
