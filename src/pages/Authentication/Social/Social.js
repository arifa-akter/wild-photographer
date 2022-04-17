import React from 'react';
import './Social.css'
const Social = () => {
    return (
        <div>
        <h2 className='text-center or-style'>or</h2>
        <div>
        <button className='social-btn w-100 py-2'>
        <i className="fa fa-google icon" aria-hidden="true"></i>
            Google</button>
        </div>
        <div>
        <button className='social-btn w-100 py-2'>
        <i className="fa fa-facebook-square icon" aria-hidden="true"></i>
            faceBook</button>
        </div>
      
     </div>
    );
};

export default Social;