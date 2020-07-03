import React from 'react';
import './App.css';
import Dinner from './dinner';


function App() {
  return <div className="App">
    <Dinner DishName="Chiken Biryani" sweetDish="Ice Cream"/>
    <hr/>
    <Dinner DishName="Chiken korma" sweetDish="Jalebi"/>
    <hr/>
    <Dinner DishName="Chiken Karahi" sweetDish="Pastry"/>
    <hr/>
    <Dinner DishName="Chiken Nihari" sweetDish="Gajar Ka Halwa"/>
  </div>

}

export default App;
