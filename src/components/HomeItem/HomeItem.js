import React from 'react';
import './HomeItem.css';


const HomeItem = () => {
    return (
        <div className='design'>
            <h1 className='word'>WHAT I DO</h1>
            <h4 className='word-space'>My Services</h4>
            <div className='container'>
                <div className='box-sadow'>
                    <h2>DESIGN SKILLS</h2>
                    <p>Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.</p>
                </div>
                <div className='box-sadow'>
                    <h2>FRONT-END DEVELOPER</h2>
                    <p>I'm a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
                   
                </div>
                <div className='box-sadow'>
                    <h2>WORDPRESS DEVELOPER</h2>
                    <p>Passionate WordPress Developer with a track record of creating over 630+ websites. I find joy in crafting user-friendly, customizable sites.</p>
                   

                </div>
            </div>
        </div>
    );
};

export default HomeItem;