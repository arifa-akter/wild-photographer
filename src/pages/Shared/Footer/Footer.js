import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
     <section className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-12 div d-lg-flex justify-content-lg-center align-items-lg-center">
                 <div className="footer-text">
                   <h1>Address</h1>
                   <p>mirpur-1</p>
                   <p>house-32 ,dhaka-1207</p>
                   <p>Road:5 no down the hostel building</p>
                 </div>
                </div>
                <div className="col-lg-4 col-12  d-lg-flex justify-content-lg-center align-items-lg-center">
                <div className="footer-text">
                   <h1>Contact Me</h1>
                   <p>phone: +8801477777777</p>
                   <p>email:AjraAkter@gmail.com</p>
                   <p>facebook: Ajra Akter</p>
                 </div>
                </div>
                <div className="col-lg-4 col-12 d-lg-flex justify-content-lg-center align-items-lg-center">
                <div className="footer-text">
                   <h1>Resources</h1>
                   <p>book</p>
                   <p>you can buy image</p>
                   <p>course and also package</p>
                 </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className="icon">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <hr className='line' />
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className="copy">
                        <p><span>Copyright</span>&copy;<span>/{year}</span></p>
                    </div>
                </div>
            </div>
        </div>
     </section>
    );
};

export default Footer;