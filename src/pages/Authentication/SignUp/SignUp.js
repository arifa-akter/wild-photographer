import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';

const SignUp = () => {
    return (
        <section className='container form-main'>
        <div className="row d-flex justify-content-center d-sm-flex justify-content-sm-center  align-items-center align-items-sm-center">
            <div className="col-lg-10 col-12 form-bg ">
              <div className="row form-style">
                  <div className="col-lg-7 col-10 form-info">
                      <h2 className='text-center form-text'>Create New Account</h2>
                      <form  action="">
                 <div className="main-form row">
                    <div className='col-12 col-lg-10'>
                        <div className='from-item'>
                            <label htmlFor="email">
                                Email
                             </label>
                             <input  type= "email" className=' w-100 h-100 py-2'  name="email" id="" required />
                           </div>
                             <div className='from-item'>
                             <label htmlFor="password">
                                Password
                             </label>
                            <input  type="password" className='w-100 h-100 py-2' name="password" id="" required />
                           </div>
                             <div className='from-item'>
                             <label htmlFor="password">
                                conform-Password
                             </label>
                            <input  type="password" className='w-100 h-100 py-2' name="conform-password" id="" required />
                           </div>
                           <div className='from-item'>
                            <button type="submit" className='w-100 h-100 py-2 social-btn login-btn'>Sign up</button>
                          </div>
                          <span>Already have an account? </span>
                          <Link className='create-account sm-font' to="/login">
                          <span> Login </span>
                          </Link>
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