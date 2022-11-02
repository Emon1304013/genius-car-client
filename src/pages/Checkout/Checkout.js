import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    return (
        <div className='my-8'>
            <h2 className='text-center'>Checkout page for <span className='text-2xl font-bold'>{service.title}</span> </h2>
        </div>
    );
};

export default Checkout;