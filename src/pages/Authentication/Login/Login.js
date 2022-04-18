import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './Login.css'
const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const [signInWithEmailAndPassword ,user,loading, error]= useSignInWithEmailAndPassword(auth)
    const handleLogin =(event)=>{
      event.preventDefault()
      const email = emailRef.current.value
      const password =passwordRef.current.value
      signInWithEmailAndPassword(email,password)
    }
    const navigateRegister =()=>{
       navigate('/signup')
     
    }
    if(user){
        navigate(from , { replace: true })
     }

    return (
        <section className='container form-main'>
        <div className="row d-flex justify-content-center d-sm-flex justify-content-sm-center  align-items-center align-items-sm-center">
            <div className="col-lg-10 col-12 form-bg ">
              <div className="row form-style">
                  <div className="col-lg-7 col-10 form-info">
                      <h2 className='text-center form-text'>Login</h2>
                      <form onSubmit={handleLogin} action="">
                 <div className="main-form row">
                    <div className='col-12 col-lg-10'>
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
                            <p>{error?.message}</p>
                             {
                              loading && <p>loading.....</p>
                             }
                           </div>
                           <div className='from-item'>
                         
                            <button type="submit" className='w-100 h-100 py-2 social-btn login-btn'>Login</button>
                          </div>
                          <span>create a new Account? </span>
                          
                          <span className='create-account sm-font' onClick={navigateRegister}> create account </span>
                        
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

export default Login;