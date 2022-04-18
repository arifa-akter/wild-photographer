import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading'
import './Social.css'
const Social = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const [signInWithGoogle ,user,loading ,error]= useSignInWithGoogle(auth)
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorMessage;
    if(loading || loading1){
        return <Loading></Loading>
    }
    if (error || error1) {
        errorMessage = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
      }
    if(user || user1){
       navigate('/')
    }
    if(user){
        navigate(from , { replace: true })
    }
    if(user1){
        navigate(from , { replace: true })
    }

    return (
        <div>
        <h2 className='text-center or-style'>or</h2>
        <div>
            {errorMessage}
        <button onClick={()=>signInWithGoogle()} className='social-btn w-100 py-2'>
        <i className="fa fa-google icon" aria-hidden="true"></i>
            Google</button>
        </div>
        <div>
        <button onClick={()=>signInWithGithub()} className='social-btn w-100 py-2'>
        <i className="fa fa-google icon" aria-hidden="true"></i>
            GitHub</button>
        </div>
      
     </div>
    );
};

export default Social;