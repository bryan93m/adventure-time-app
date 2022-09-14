import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return (
        <div className='footer_container'>
            <p className="school">© Flatiron School <span className="schoolyear">2022</span></p>
            <Link className='aboutbtn' to='/about'>About</Link>
        </div>
    );
}

export default Footer;