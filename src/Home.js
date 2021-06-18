import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory()

    const routeToOrder = () => {
        console.log('Submitting something to go to the next page')
        history.push('/pizza')
    }

    return (
        <div className='home-wrapper'>
            <h1 className='home-text'>Your favorite food, delivered while coding!</h1>
            <button
                onClick={routeToOrder}
                className='md-button order-button'
            >
                Pizza?
            </button>
        </div>
    )
}

export default Home