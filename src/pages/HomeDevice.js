import React from 'react';

export default function HomeDevice() {
    return (
        <div className="page-container">
            <h1 className="page-title">FARMSTER 홈디바이스</h1>
            <div className="content">
                <div className="homedevice-intro">
                    <p className="intro-text">
                        <strong>스마트팜 홈디바이스</strong>는 가정에서 쉽게 식물을 키울 수 있도록 설계된 원통형 적층형 디바이스입니다.
                        하단의 물통과 자동 펌프를 통해 물과 양액을 순환시켜 식물 뿌리에 최적의 환경을 제공합니다.
                    </p>
                    <div className="features-list">
                        <div className="feature-item">✔ 자동 물 순환 시스템</div>
                        <div className="feature-item">✔ 공간 효율적 적층형 디자인</div>
                        <div className="feature-item">✔ 간편한 관리와 유지보수</div>
                        <div className="feature-item">✔ 아름다운 원통형 미니멀 디자인</div>
                    </div>
                </div>
                <div className="homedevice-container">
                    <img
                        className="homedevice-white-img"
                        src={process.env.PUBLIC_URL + '/images/HomeDevice-white.png'}
                        alt="화이트 홈디바이스"
                    />
                    <img
                        className="homedevice-orange-img"
                        src={process.env.PUBLIC_URL + '/images/HomeDevice-orange.png'}
                        alt="오렌지 홈디바이스"
                    />
                </div>
            </div>
        </div>
    );
}
