import React from 'react';
import './Service.css'
const Service = ({photoService}) => {
    const {name , detail , image,price} = photoService
    return (
        <div className='col-12 col-lg-4 col-md-6 g-3 gx-lg-4'>
            <div className="service-card">
                <div className="service-image">
                    <img src={image} alt="" />
                </div>
                <div className="service-text">
                    <h3>{name}</h3>
                    <p>{detail}</p>
                    <h2><span>price:</span> $ {price}</h2>
                </div>
                <div>
                 <button className="checkout-btn">CheckOut</button>
            </div>
            </div>
       
        </div>
    );
};

export default Service;