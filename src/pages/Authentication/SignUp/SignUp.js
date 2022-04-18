import React, { useRef, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';

import Social from '../Social/Social';
import auth from '../../../firebase.init';

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConformRef = useRef()
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword , user ,loading ,error] = useCreateUserWithEmailAndPassword(auth)
    const [error2 ,setError2] =useState()
    const handleSubmit =(event)=>{
        event.preventDefault()
        const email = emailRef.current.value 
        const password = passwordRef.current.value
        const conformPassword = passwordConformRef.current.value
        if(password !== conformPassword){
         return setError2('your password does not match')
        }
        if(password.length<6){
            return setError2('please character up to 6 digit')
        }
        createUserWithEmailAndPassword(email, password )
        console.log(email, password)
    }
    const navigateLogin =()=>{
      navigate('/login')
    }
    if(user){
        navigate('/')
    }
     
    return (
        <section className='container form-main'>
        <div className="row d-flex justify-content-center d-sm-flex justify-content-sm-center  align-items-center align-items-sm-center">
            <div className="col-lg-10 col-12 form-bg ">
              <div className="row form-style">
                  <div className="col-lg-7 col-10 form-info">
                      <h2 className='text-center form-text'>Create New Account</h2>
                      <form onSubmit={handleSubmit} action="">
                 <div className="main-form row">
                    <div className='col-12 col-lg-10'>
                        <div className='from-item'>
                            <label htmlFor="email">
                                name
                             </label>
                             <input ref={emailRef} type= "text" className=' w-100 h-100 py-2'  name="text" id="" required />
                           </div>
                        <div className='from-item'>
                            <label htmlFor="email">
                                Email
                             </label>
                             <input ref={emailRef} type= "email" className=' w-100 h-100 py-2'  name="email" id="" required />
                           </div>
                             <div className='from-item'>
                             <label htmlFor="password">
                                Password
                             </label>
                            <input ref={passwordRef} type="password" className='w-100 h-100 py-2' name="password" id="" required />
                           </div>
                             <div className='from-item'>
                             <label htmlFor="password">
                                conform-Password
                             </label>
                            <input ref={passwordConformRef} type="password" className='w-100 h-100 py-2' name="conform-password" id="" required />
                            <p className='text-danger'>{error2}</p>
                            <p className='text-danger'>{error?.message}</p>
                             {
                              loading && <p>loading.....</p>
                             }
                           </div>
                           <div className='from-item'>
                            <button type="submit" className='w-100 h-100 py-2 social-btn login-btn'>Sign up</button>
                          </div>
                          <span>Already have an account? </span>
                          <span className='create-account sm-font' onClick={navigateLogin}> Login </span>
                          <Social></Social>
                      </div>
                   </div>
                      </form>
                  </div>
              </div>
            </div>
        </div>
    </section>
    );
};

export default SignUp;