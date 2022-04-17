import React from 'react';
import './NotFound.css'
import notFound from '../../../images/notFound.jpg'

const NotFound = () => {
    return (
        <section className='not-found'>
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 col-12">
                      <div className="not-found-img">
                      <img src={notFound} className=" w-100 " alt="" />
                      </div>
                   </div>
                  
               </div>
           </div>
        </section>
    );
};

export default NotFound;