import React from 'react';
import productdesc1 from './img/productdesc1.png';
import verified from './img/verified.png';
import verified2 from './img/verified2.png';
import './Card.css';

function Card() {
    return (
        <div className="main-card-contianer">
            <div className="heading">
                <h1>Product and Service</h1>
            </div>
            <div className="card-container">
                <div className='card'>
                    <img src={productdesc1}/>
                    <h1 className='subtitle'>Our Product</h1>
                    <div>
                        <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                    </div>
                    <button className="card-button">Read More</button>
                </div>
                <div className='card'>
                    <img src={verified}/>
                    <h1 className='subtitle'>Our Service</h1>
                    <div>
                        <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                    </div>
                    <button className="card-button">Read More</button>
                </div>
                <div className='card'>
                    <img src={verified2}/>
                    <h1 className='subtitle'>Our Technology</h1>
                    <div>
                        <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                    </div>
                    <button className="card-button">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Card
