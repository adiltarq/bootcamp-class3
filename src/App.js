import React from 'react';
import './App.css';
import Dinner from './dinner';


function App() {
  return <div className="App">
    <Dinner DishName="Chiken Karahi" sweetDish="Ice Cream"/>
    <hr/>
    <Dinner DishName="Chiken Biryani" sweetDish="Jalebi"/>
    <hr/>
    <Dinner DishName="Chiken Boti Roll" sweetDish="Pastry"/>
    <hr/>
    <Dinner DishName="Chiken Nihari" sweetDish="Gajar Ka Halwa"/>
  </div>

}

export default App;
