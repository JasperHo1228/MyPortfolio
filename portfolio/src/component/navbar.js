import React from 'react'
import '../style/navbar.css'
import {FiHome} from 'react-icons/fi'
function navbar(){
    return(
        <nav className='Navbar'>
            <a href="#"><FiHome/></a>
        </nav>
    );
}

export default navbar;