import React from 'react'
import {Link} from 'react-router-dom';
import './CTA.css'

const CTA = (props) => {
   return(
        <Link to={props.target} className='link cta'>
            {props.children}
        </Link>  
   )
};
export default CTA;
