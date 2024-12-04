import React from 'react';

export default function HomeDevice() {
    return (
        <div className="page-container">
            <h1>HOME DEVICE</h1>
            <div className="content">
                <div className="homedevice-container">
                    <img className="homedevice-white-img" src={process.env.PUBLIC_URL + '/images/HomeDevice-white.png'} />
                    <img className="homedevice-orange-img" src={process.env.PUBLIC_URL + '/images/HomeDevice-orange.png'} />
                </div>
            </div>
        </div>
    );
} 