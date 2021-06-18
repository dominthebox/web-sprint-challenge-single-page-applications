import React from 'react';
// import { useHistory } from 'react-router-dom';

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

    // helpers to route to confirmation page upon submitting order, can't figure out how to render the new order on the confirmation page so I'm commenting it out for now

    // const history = useHistory()
    // const routeToOrderConfirm = () => {
    //     console.log('Submitting something to show navigation to confirmation page')
    //     history.push('/confirmation')
    // }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>

            <h2>Build Your Own Pizza!</h2>

            <div>
                <h4>Who's this for?</h4>
                <label>Name
                    <input id='name-input'
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
            </div>

            <div>
                <h4>Choice of Size</h4>
                
                <label>Size
                    <select id='size-dropdown'
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
                <br></br>
                <label>Alla Vodka
                    <input
                        type='radio'
                        name='sauce'
                        value='vodka'
                        onChange={onChange}
                        checked={values.sauce === 'vodka'}
                    />
                </label>
                <br></br>
                <label>Pesto
                    <input
                        type='radio'
                        name='sauce'
                        value='pesto'
                        onChange={onChange}
                        checked={values.sauce === 'pesto'}
                    />
                </label>
                <br></br>
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
                <h4>Add Toppings (choose up to 5)</h4>

                <label>Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        value='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Spicey Italian Sausage
                    <input
                        type='checkbox'
                        name='sausage'
                        value='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Peppers & Onions
                    <input
                        type='checkbox'
                        name='peppers'
                        value='peppers'
                        checked={values.peppers}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Black Olives
                    <input
                        type='checkbox'
                        name='olives'
                        value='olives'
                        checked={values.olives}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Mushrooms
                    <input
                        type='checkbox'
                        name='mushrooms'
                        value='mushrooms'
                        checked={values.mushrooms}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div>
                <h4>Special Instructions</h4>
                <label>
                    <input id ='special-text'
                        value={values.instructions}
                        onChange={onChange}
                        name='instructions'
                        type='text'
                        placeholder='Anything else you want to add?'
                    />
                </label>
            </div>

            <div className='order-submit'>
                <button 
                    id='order-button' 
                    disabled={disabled}
                    // onClick={routeToOrderConfirm}
                    >Add to Order!</button>

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