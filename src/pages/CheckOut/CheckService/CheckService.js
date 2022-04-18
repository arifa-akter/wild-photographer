import React from 'react';
import './CheckService.css'
const CheckService = ({checkSingle}) => {
    const {name ,image, price} = checkSingle
    return (
        <div className='col-12 col-lg-6 mx-auto d-lg-flex justify-content-lg-center align-items-lg-center'>
            <div className="card-check">
            <img src={image} className="img" alt="" />
            <p>{name}</p>
            <p>price: ${price}</p>
            <h3 className='text-center'> Check out success</h3>
            <h3 className='text-center'>Now you contact me</h3>
            </div>
            
        </div>
    );
};

export default CheckService;