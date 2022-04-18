import React from 'react';
import useServices from '../../../hook/useServices';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
   const [photographyService] = useServices()
   console.log(photographyService)
    return (
       <section id="service" className='services'>
         <div className="container">
         <h1 className='text-center service-header'>SERVICES</h1>
         <div className="row">
             {
             photographyService.map(photoService =><Service
             key={photoService.id}
             photoService = {photoService}
             >
             </Service>)
             }
         </div>
         </div>
       </section>
    );
};

export default Services;