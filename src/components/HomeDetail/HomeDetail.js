import React from 'react';
import image from '../../image/image.png';
import './HomeDetail.css';

const HomeDetail = () => {
    return (
         <section>
             <div className='container'>
                <div className='half-width left'>
                <img src={image} alt="" />
                <div className='button2'>
                <div className='button1'>
                <h1>3+ <span className='color1'>Month of Experience</span></h1>
                </div>
                <div className='button1'>
                <h1>18+ <span className='color1'>Completed Projects</span> </h1>
                </div>
            </div>
            </div>
            <div className='half-width'>
                <h1>HELLO, MY NAME IS</h1>
                <h3>Suliman Vassa</h3>
                <h2>I AM Web Developer</h2>
                <p>From Dhaka, Bangladesh. I'm a Front End Web developer who is passionate about making error-free websites</p>
                <button>Contact</button>
            </div>
            
          </div>
         </section>
       
    );
};

export default HomeDetail;