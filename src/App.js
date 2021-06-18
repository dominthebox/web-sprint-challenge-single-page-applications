import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import Home from './Home';
import OrderForm from './PizzaForm';
import schema from './FormSchema';
import Confirmation from './ConfirmationPage';

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
  mushrooms: false,
}
const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}
const initialOrders = []
const initialDisabled = true

const App = () => {

  const [orders, setOrders] = useState(initialOrders)               // array of order objects
  const [formValues, setFormValues] = useState(initialFormValues)  // object
  const [formErrors, setFormErrors] = useState(initialFormErrors)  // object
  const [disabled, setDisabled] = useState(initialDisabled)        // boolean

  // Helpers

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([res.data, ...orders])
        console.log('receiving a successful response back', res.data)
      })
      .catch(err => {
        console.log('unsuccessful response', err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  // Validation

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  // Event Handlers
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value  // NOT an array
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni', 'sausage', 'peppers', 'olives', 'mushrooms'].filter(toppings => formValues[toppings]),
      instructions: formValues.instructions.trim()
    }
    postNewOrder(newOrder)  
  }

 // Side Effects 
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <h1 className='lambdaEats-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <br></br>
          <Link id='order-pizza' to='/pizza'>Order</Link>
          <br></br>
          <Link to='/confirmation'>Confirmation</Link>
        </div>
      </nav>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/pizza'>
      <OrderForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />  
      </Route>
      <Route path='/confirmation' component={Confirmation} />
      </Switch>
    </div>
  );
};
export default App;
