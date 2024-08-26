import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <header className='display'>
         <div>
           <nav>
                <ul>
                <label><Link className="logo" to={"/home"}>SulimanVassa<span className='dood'>.</span></Link></label>
                <Link className='navbar hover' to="/contact">Say Hello</Link>
                <Link className='navbar' to="/blog">Blog</Link>
                <Link className='navbar' to="/aboute">Aboute Me</Link>
                <Link className='navbar' to="/home">Home</Link>
                </ul>
            </nav>
        </div>
       </header>
    );
};

export default Header;