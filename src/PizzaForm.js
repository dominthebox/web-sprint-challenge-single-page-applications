import React from 'react';
import { Link } from 'react-router-dom';

const OrderForm = (props) => {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt =>{
        const {name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>

            <h2>Build Your Own Pizza</h2>

            <div id='name-input'>
                <h2>Who's this for?</h2>
                <label>Name
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
            </div>

            <div id='size-dropdown'>
                <h4>Choice of Size</h4>
                
                <label>Size
                    <select
                        onChange={onChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>-- Select a Size --</option>
                        <option value='small'>Small (10in)</option>
                        <option value='medium'>Medium (14in)</option>
                        <option value='large'>Large (18in)</option>
                    </select>
                </label>
            </div>

            <div className='sauce-radios'>
                <h4>Choice of Sauce</h4>
                
                <label>Marinara
                    <input
                        type='radio'
                        name='sauce'
                        value='marinara'
                        onChange={onChange}
                        checked={values.sauce === 'marinara'}
                    />
                </label>

                <label>Alla Vodka
                    <input
                        type='radio'
                        name='sauce'
                        value='vodka'
                        onChange={onChange}
                        checked={values.sauce === 'vodka'}
                    />
                </label>

                <label>Pesto
                    <input
                        type='radio'
                        name='sauce'
                        value='pesto'
                        onChange={onChange}
                        checked={values.sauce === 'pesto'}
                    />
                </label>

                <label>Alfredo
                    <input
                        type='radio'
                        name='sauce'
                        value='alfredo'
                        onChange={onChange}
                        checked={values.sauce === 'alfredo'}
                    />
                </label>
            </div>

            <div className='toppings-checkboxes'>
                <h4>Add Toppings</h4>
                <h5>Choose up to 5</h5>

                <label>Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onCHange={onChange}
                    />
                </label>

                <label>Spicey Italian Sausage
                    <input
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onCHange={onChange}
                    />
                </label>

                <label>Peppers & Onions
                    <input
                        type='checkbox'
                        name='peppers'
                        checked={values.peppers}
                        onCHange={onChange}
                    />
                </label>

                <label>Black Olives
                    <input
                        type='checkbox'
                        name='olives'
                        checked={values.olives}
                        onCHange={onChange}
                    />
                </label>

                <label>Mushrooms
                    <input
                        type='checkbox'
                        name='shrooms'
                        checked={values.shrooms}
                        onCHange={onChange}
                    />
                </label>
            </div>

            <div id='special-text'>
                <h4>Special Instructions</h4>

                <label>Special Instructions
                    <input
                        value={values.instructions}
                        onChange={onChange}
                        name='instructions'
                        type='text'
                        placeholder='Anything else you want to add?'
                    />
                </label>
            </div>

            <div className='order-submit'>
                <button disabled={disabled}>Place Order!</button>

                <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
                </div>
            </div>
        </form>
    )
}

export default OrderForm