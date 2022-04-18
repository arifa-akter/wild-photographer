import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import './Blogs.css'
const Blogs = () => {
    // const [user]=useAuthState()
    return (
     <section className="blogs">
         <div className="container">
             <div className="row">
                  <div className=" col-12 col-lg-7 mx-auto d-lg-flex justify-content-lg-center align-items-lg-center">
                     <div className="blog-card">
                     <h2 className='Qus color'>why are you using firebase what 
                         other option do you have to implement authentication?</h2>
                         <p>firebase is the most popular software development platform that provide many secure authentication
                            firebase is no-cost multi-perform sign in , sign up authentication .it provide 
                            end-to-end identity solution like Git Hub , google, facebook , twitter,and also provide 
                            email and password authentication.that is why i use firebase for my website authentication.for other option
                            i use okta for my website authentication it is an identity management service powered by three massive tech trends
                             (cloud, digital transformation, and security).Lots of integrations; Legacy support

            
                         </p>
                             <hr />
                         <h2 className='Qus color'>Difference between authentication and authorization ?</h2>
                         <h3 className='Qus colors'>Authentication</h3>
                         <ul>
                            <li> verify the user identity</li>
                            <li> authentication it is the process which is given an assurance</li>
                            <li> for example create user and then login</li>
                            <li> it changeable by the user</li>
                         </ul>
                         <h3 className='Qus colors'>Authorization</h3>
                         <ul>
                            <li> Generate the permission to the user do something </li>
                            <li> authorization it depend on third party authentication </li>
                            <li> for example access by google facebook authorization</li>
                            <li> it cannot change able bay the user</li>
                         </ul>
                         <hr />
                         <h2 className='Qus color'>what other service firebase provide other than authentication ?</h2>
                         <p>many service firebase provide other then authentication such as  ,cloud function ,Google Analytics
                         Hosting,Predictions, Cloud Firestore ,dynamic link, remote config  ,performance monitoring, Firebase Realtime Database etc.
                             
                         </p>
                      
                     </div>
                  </div>
             </div>
         </div>
     </section>
    );
};

export default Blogs;