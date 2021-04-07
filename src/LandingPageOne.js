import React from 'react';
import './LandingPageOne.css';
import Card from './Card';
import Footer from './Footer';
import pana from './img/pana.png';
import pana2 from './img/pana2.png';
import { Link } from 'react-router-dom';

function LandingPageOne() {
    return (
        <div className="main-container">
            <div className="container">
                <div className="text-wrapper">
                    <h1 className="title">Making the most of the ever-growing</h1>
                    <h1 className="title-red">Information Technology</h1>
                    <p className="text">Managed by a team of professional experts with extensive experience and impressive track records</p>
                    <button class="btn">Read More</button>
                </div>
                <div className="image-container">
                    <img className="pana" src={pana}/>
                </div>
            </div>
            <div className="container container-reverse">
                <div className="text-wrapper">
                    <h1 className="title">Welcome to <span className="red">Dwidasa Samsara Indonesia (DSI)</span></h1>
                    <p className="text">Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based application concept.<br></br> Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                </div>
                <div className="image-container-reverse">
                    <img className="pana-2" src={pana2}/>
                </div>
            </div>
            <Card />
            <Footer />
        </div>
    )
}

export default LandingPageOne;
