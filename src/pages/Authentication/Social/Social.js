import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Social.css'
const Social = () => {
    const navigate = useNavigate()
    const [signInWithGoogle ,user]= useSignInWithGoogle(auth)
    if(user){
       navigate('/')
    }
    return (
        <div>
        <h2 className='text-center or-style'>or</h2>
        <div>
        <button onClick={()=>signInWithGoogle()} className='social-btn w-100 py-2'>
        <i className="fa fa-google icon" aria-hidden="true"></i>
            Google</button>
        </div>
        <div>
        </div>
      
     </div>
    );
};

export default Social;