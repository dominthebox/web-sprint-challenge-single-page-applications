import React from 'react';
// import axios from 'axios';


 

const Confirmation = () => {
 

    // const showNewOrder = newOrder => {
    //     axios.get('https://reqres.in/api/orders', newOrder)
    //   .then(res => {
    //     setOrders([res.data, ...orders])
    //     console.log('receiving a successful response back', res.data)
    //   })
    //   .catch(err => {
    //     console.log('Houston, we have a problem', err)
    //   })
    // }


    return (
        <div className='confirm-wrapper'>
            <h1 className='confirm-text'>We received your order, it's on the way!</h1>

            {/* what do I put here to show the order? axios get request? */}
            {/* {showNewOrder()} */}
            
        </div>
    )
}

export default Confirmation