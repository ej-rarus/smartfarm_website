import React from 'react';

export default function SmartFarm() {
    return (
        <div className="page-container">
            <h1 style={{color: 'blue'}}>SMART FARM</h1>
            <div className="content">
                <div className="farm-img-container">
                        <img className="farm-img" src={process.env.PUBLIC_URL + '/images/farm-img1.png'} />
                        <img className="farm-img" src={process.env.PUBLIC_URL + '/images/farm-img2.png'} />
                        <img className="farm-img" src={process.env.PUBLIC_URL + '/images/farm-img3.png'} />
                </div>
            </div>
        </div>
    );
} 