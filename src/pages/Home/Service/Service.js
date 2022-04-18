import React from 'react';
import { useNavigate} from 'react-router-dom';
import './Service.css'
const Service = ({photoService}) => {
    const {name , detail , image,price , id} = photoService
    const navigate = useNavigate()
    const checkOut =(id) =>{
        navigate(`/checkout/${id}`)
    }

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
                 <button onClick={()=>checkOut(id)} className="checkout-btn">Buy Now</button>
            </div>
            </div>
        </div>
    );
};

export default Service;