import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import OrderForm from './PizzaForm';
import * as yup from 'yup';
import schema from './FormSchema';

// Initial States
const initialFormValues = {
  // Text Inputs
  name: '',
  instructions: '',
  // Dropdown options
  size: '',
  // Radio Button options
  sauce: '',
  // Checkbox Options
  pepperoni: false,
  sausage: false,
  peppers: false,
  olives: false,
  shrooms: false,
}
const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}
const initialOrders = []
const initialDisabled = true

const App = () => {

  const [orders, setOrders] = useState(initialOrders) // array of order objects

  return (
    <div className='App'>
      <nav>
        <h1 className='lambdaEats-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
          <Link to='/help'>Help</Link>
        </div>
      </nav>
          
        
    </div>
  );
};
export default App;
