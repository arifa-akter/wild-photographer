import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../../hook/useServices';
import CheckService from '../CheckService/CheckService';
import './CheckServices.css'
const CheckServices = () => {
    const {idCheck}=useParams()
 const[photographyService]=useServices()
 const checkOutService = photographyService.filter(r=>r.id == idCheck )
    console.log(checkOutService)
    return (
       <section className='check-out-service'>
         <div className="container">
             <div className="row">
            {
            checkOutService.map(checkSingle =><CheckService
            key={checkSingle.id}
            checkSingle={checkSingle}
            ></CheckService>)
            }
             </div>
         </div>
       </section>
    );
};

export default CheckServices;