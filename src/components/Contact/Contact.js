import React from 'react';
import './Contact.css';
import image from '../../image/images.png';

const Contact = () => {
    return (
        <div className='half_width'>
            <div className="image-containt">
                <img src={image} alt="" />
            </div>
            <div className="contact">
                <h1>contact</h1>
                <p>Let's Talk About Ideas</p>
                <form action="">
                    <div className="child_form">
                        <label for="name">Your name</label>
                        <input type="name" name='name' placeholder='your name' required />
                    </div>
                    <div className="child_form">
                        <label for="email">Your email</label>
                        <input type="email" name='email' placeholder='your email' required />
                    </div>
                    <div className="child_form">
                        <label for="subject">Subject</label>
                        <input type="subject" name='subject' placeholder='subject' required />
                    </div>
                    <div className="child_form">
                        <label for="messge">Your message (optional)</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='your message'></textarea>
                    </div>
                    <div className="child_form">
                        <input type="button" value="Sent Message" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;