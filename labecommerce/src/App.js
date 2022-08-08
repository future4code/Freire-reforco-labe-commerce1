import React, { useState } from "react";
import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import Filter from "./Components/Filter/Filter";



function App() {
  const [cardList, setCardList] = useState([
    {
      id: 1,
      name: "Marte",
      price: 2000000,
      description: " Marte, o Planeta Vermelho.",
      image: "./Img/mars.jpg"
  
  },
  {
      id: 2,
      name: "Vênus",
      price: 3000000,
      description: "Vênus é o mais quente do Sistema Solar e um dos mais brilhantes do céu, perdendo apenas para a Lua.",
      image: "./Img/venus.jpg"
  },

  {
    id: 3,
    name: "Lua",
    price: 500000,
    description: "Que tal conhecer o satélite natural da Terra?",
    image: "./Img/moon.jpg"
  },

  {
    id: 4,
    name: "Saturno",
    price: 7000000,
    description: "O planeta com o maior número de luas do Sistema Solar",
    image: "./Img/saturn.jpg"
  },
  
  {
    id: 5,
    name: "Netuno",
    price: 8000000,
    description: "Se prepare para encarar temperaturas extremamente baixas e pouca luminosidade.",
    image: "./Img/neptune.jpg"
  },

  {
    id: 6,
    name: "Júpiter",
    price: 6000000,
    description: "O gigante gasoso.",
    image: "./Img/jupiter.jpg"
  },

  ]);

// -- Filtros -- //
  //const [minValue, setMinValue] = useState([500000]) 
  //const [maxValue, setMaxValue] = useState([8000000]) 
  const [query, setQuery] = useState("")

  //---- Estados para o Carrinho ---- //
  //const [totalValue, setTotalValue] = (0);
  const [cart, setCart] = useState([]);


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
     
      <Filter
      query={query}
      setQuery={setQuery}

      
        // {/* // {card.map((cardList) => {
        // //   return cardList.title.includes(query) || cardList.description.includes(query)
        // // }) */}
        // {cardList.map((card)=> {
        // return <Cards key={card.id} cardList={card} />
        // })}

       
      // {/* // minimo={minValue}
      // // maximo={maxValue}
      
      // // onChangeMinValue={onChangeMinValue}
      // // onChangeMaxValue={onChangeMaxValue}
      // // onChangeQuery={onChangeQuery}
      // // onChangeOrd={onChangeOrd} */}
       />


      {card}
      <br></br>
      <Cart cart={cart}></Cart>

      <Footer/>

    </div>
  );
}

export default App;
