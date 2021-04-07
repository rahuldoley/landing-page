import React from 'react';
import './Footer.css';
import Logo from './img/Logo.png';
import image7 from './img/image7.png';
import image9 from './img/image9.png';
import image10 from './img/image10.png';
import image11 from './img/image11.png';
import image13 from './img/image13.png';
import image14 from './img/image14.png';

function Footer() {
    return (
        <div className="footer-container">
            <div className="main-footer-card">
                <div className="footer-card">
                    <img src={Logo}/>
                    <h2 className="footer-text-1">PT Dwidasa Samsara Indonesia</h2>
                    <h3 className="footer-text-2">Ruko Jalur Sutera 29A No. 53<br></br>Alam Sutera Serpong, Tangerang 15323</h3>
                </div>
                <div className="footer-card">
                    <h2 className="footer-text-3">Contact</h2>
                    <h3 className="footer-text-2">Phone : +62.21.5314.1135<br></br>Fax : +62.21.5314.1135<br></br>Email : community@dwidasa.com</h3>
                </div>
                <div className="footer-card">
                    <div className="">
                        <img className="footer-image" src={image7} />
                        <img className="footer-image" src={image9} />
                        <img className="footer-image" src={image10} /><br></br>
                        <img className="footer-image" src={image11} />
                        <img className="footer-image" src={image14} />
                        <img className="footer-image" src={image13} />
                    </div>
                </div>
            </div>
            <div className="footer">
                <h1 className="footer-text-4">Copyright © 2015 - Dwidasa Samsara Indonesia</h1>
            </div>
        </div>
    )
}

export default Footer
