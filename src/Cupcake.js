import React from 'react';
import './Cupcake.css';


const Cupcake = () => {
  return (
    <div class="box-canvas">
    <div class="wrapper"> <img src="./frosting.png" className="App-logo" alt="logo" /></div>
    <div class="topping"></div>
    <div class="topping-middle"></div>
    <div class="topping-top"></div>
    <div class="cherry"></div>
  </div>
  );
};

export default Cupcake;
