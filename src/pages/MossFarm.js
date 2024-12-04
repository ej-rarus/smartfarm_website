import React, { useState, useRef } from 'react';

export default function MossFarm() {
    const [positions, setPositions] = useState({
        bed: { x: 0, y: 0 },
        one: { x: 0, y: 0 },
        top: { x: 0, y: 0 },
        side: { x: 0, y: 0 }
    });
    const [showMagnifier, setShowMagnifier] = useState({
        bed: false,
        one: false,
        top: false,
        side: false
    });
    const imgRefs = {
        bed: useRef(null),
        one: useRef(null),
        top: useRef(null),
        side: useRef(null)
    };

    const handleMouseMove = (e, type) => {
        const elem = imgRefs[type].current;
        const { left, top } = elem.getBoundingClientRect();
        
        // 마우스 위치에 대한 CSS 변수 설정
        const magnifier = e.currentTarget.querySelector('.magnifier');
        if (magnifier) {
            magnifier.style.setProperty('--mouse-x', `${e.clientX - left}px`);
            magnifier.style.setProperty('--mouse-y', `${e.clientY - top}px`);
        }

        // 배경 이미지 위치 계산
        const x = ((e.clientX - left) / elem.width) * 100;
        const y = ((e.clientY - top) / elem.height) * 100;
        
        setPositions(prev => ({
            ...prev,
            [type]: { x, y }
        }));
    };

    const renderImage = (type, src) => (
        <div className="mossfarm-img"
            onMouseEnter={() => setShowMagnifier(prev => ({ ...prev, [type]: true }))}
            onMouseLeave={() => setShowMagnifier(prev => ({ ...prev, [type]: false }))}
            onMouseMove={(e) => handleMouseMove(e, type)}
        >
            <img 
                ref={imgRefs[type]}
                className="mossfarm-bed-img" 
                src={process.env.PUBLIC_URL + src}
                alt={`moss ${type}`} 
            />
            {showMagnifier[type] && (
                <div 
                    className="magnifier"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + src})`,
                        backgroundPosition: `${positions[type].x}% ${positions[type].y}%`
                    }}
                />
            )}
        </div>
    );

    return (
        <div className="page-container">
            <h1 style={{color: 'green'}}>이끼 FARM</h1>
            <div className="content">
                <div className="mossfarm-grid">
                    {renderImage('bed', '/images/moss-bed.jpg')}
                    {renderImage('one', '/images/moss-1.jpg')}
                    {renderImage('top', '/images/moss-top.jpg')}
                    {renderImage('side', '/images/moss-side.jpg')}
                </div>
            </div>
        </div>
    );
} 