import React, { useState } from 'react';
import Logo from './img/Logo.png';
import mail from './img/mail.png';
import shuffle from './img/shuffle.png';
import Union from './img/Union.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    <img className="logo" src={Logo} />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Product
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Technology
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Client
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Partner
                        </Link>
                    </li>
                    <div className="navbar-icons">
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                <img src={Union}/>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                <img src={mail}/>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                <img src={shuffle}/>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
