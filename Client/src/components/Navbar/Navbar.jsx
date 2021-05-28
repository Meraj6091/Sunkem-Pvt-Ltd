import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import CTA from '../CTA/CTA';
const Navbar = () => {
   return(
       <div className='main-header'>
           <div className='logo-container'>
               <Link to='/' className='link logo'>Sunkem</Link>
           </div>
           <nav className='main-nav'>
                <ul className='nav-list'>
                   <li className='nav-item'>
                       <Link to='/about' className='link nav-link'>About</Link>
                   </li> 
                   <li className='nav-item'>
                       <Link to='/signup' className='link nav-link'>Signup</Link>
                   </li> 
                   <li className='nav-item'>
                     <CTA target='/signin'>Login</CTA>
                   </li> 
                </ul>
           </nav>
       </div>
   )
};
export default Navbar;