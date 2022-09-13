import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return (
        <div className='footer__container'>
            <p>Flatiron School, 2022</p>
            <Link to='/about'>About</Link>
        </div>
    );
}

export default Footer;