import React from 'react';
import './Gallery.css'
import gallary1 from '../../../images/gallary1.jpg'
import gallary2 from '../../../images/gallary2.jpg'
import gallary3 from '../../../images/gallery3.jpg'
import gallery4 from '../../../images/gallery4.jpg'
import gallery5 from '../../../images/gallery5.jpg'
import gallary6 from '../../../images/gallary6.jpg'
const Gallery = () => {
    return (
      <section id="gallery" className='gallery'>

    <div className="container">
    <div className="row">
        <h1 className='text-center service-header'>GALLERY</h1>
            <div className="col-12 col-lg-4">
                <div className="gal">
                    <div className="gal-img">
                    <img src={gallary1} alt="" />
                    </div>
                    <div className="gal-text">
                        <p>Ajra akter</p>
                        <p><span>Location</span> :BANGLADESH</p>
                        <div className='icons'>
                        <div className='icons-2'>
                            <span>4.5</span>
                            <span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='icons-3'>
                            <span>4</span>
                            <span>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>      
            </div>
            {/* image-2 */}
            <div className="col-12 col-lg-4">
            <div className="gal">
                    <div className="gal-img">
                    <img src={gallary2} alt="" />
                    </div>
                    <div className="gal-text">
                        <p>Ajra akter</p>
                        <p><span>Location</span> :green Forest</p>
                        <div className='icons'>
                        <div className='icons-2'>
                            <span>4.5</span>
                            <span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='icons-3'>
                            <span>8</span>
                            <span>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* image-3 */}
            <div className="col-12 col-lg-4">
            <div className="gal">
                    <div className="gal-img">
                    <img src={gallary3} alt="" />
                    </div>
                    <div className="gal-text">
                        <p>Ajra akter</p>
                        <p><span>Location</span> :Amazon</p>
                        <div className='icons'>
                        <div className='icons-2'>
                            <span>4.5</span>
                            <span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='icons-3'>
                            <span>5</span>
                            <span>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

        <div className="row mt-4">
            <div className="col-12 col-lg-4">
                <div className="gal">
                    <div className="gal-img">
                    <img src={gallery4} alt="" />
                    </div>
                    <div className="gal-text">
                        <p>Ajra akter</p>
                        <p><span>Location</span> :BANGLADESH</p>
                        <div className='icons'>
                        <div className='icons-2'>
                            <span>5</span>
                            <span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='icons-3'>
                            <span>8</span>
                            <span>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>      
            </div>
            {/* image-2 */}
            <div className="col-12 col-lg-4">
            <div className="gal">
                    <div className="gal-img">
                    <img src={gallery5} alt="" />
                    </div>
                    <div className="gal-text">
                        <p>Ajra akter</p>
                        <p><span>Location</span> :india</p>
                        <div className='icons'>
                        <div className='icons-2'>
                            <span>4.5</span>
                            <span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='icons-3'>
                            <span>6</span>
                            <span>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* image-3 */}
            <div className="col-12 col-lg-4">
            <div className="gal">
                    <div className="gal-img">
                    <img src={gallary6} alt="" />
                    </div>
                    <div className="gal-text">
                        <p>Ajra akter</p>
                        <p><span>Location</span> :Africa</p>
                        <div className='icons'>
                        <div className='icons-2'>
                            <span>4.5</span>
                            <span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className='icons-3'>
                            <span>5</span>
                            <span>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>

    
      </section>
    );
};

export default Gallery;