import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner3 from '../../../images/banner3.jpg'
import banner4 from '../../../images/banner4.jpg'
import './Banner.css'

const Banner = () => {
    return (
    <div>
               <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 b-img"
      src={banner4}
      alt="First slide"
    />
    <Carousel.Caption>
 <div className="row">
     <div className="col-lg-6 col-12 mx-auto banner-text text">
     <h3>WILD PHOTOGRAPHER</h3>
      <p>This hotel make you comfort as like your home .
          mane place and it help to feel refresh 
      </p>
     </div>
 </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 b-img"
      src={banner1}
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className="row">
     <div className="col-lg-6 col-12 mx-auto banner-text">
     <h3>ANIMAL NATURE</h3>
      <p>your family feel more comfort in our hotel it save for 
        your family . there space for child
      </p>
     </div>
   </div>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 b-img"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="row">
     <div className="col-lg-6 col-12 mx-auto banner-text text ">
     <h3>PHOTO EXPLORE</h3>
      <p>you can stay in our hotel in more and more less price 
          you stay more time in your less price
      </p>
     </div>
   </div>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>     
    </div>
    );
};

export default Banner;