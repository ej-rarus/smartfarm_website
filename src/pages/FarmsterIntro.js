import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FarmsterIntro() {
    // 커스텀 화살표 컴포넌트
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button className="slick-arrow slick-prev-custom" onClick={onClick}>
                〈
            </button>
        );
    };

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button className="slick-arrow slick-next-custom" onClick={onClick}>
                〉
            </button>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }

    return (
        <ReactFullpage
            licenseKey={''}
            navigation={true}
            scrollingSpeed={1000}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section"> 
                            <div className="fullpage-image-container">
                                <img 
                                    className="fullpage-image"
                                    src={process.env.PUBLIC_URL + '/images/tunnel-img_1.jpg'} 
                                    alt="Tunnel Farm" 
                                />
                                <div className="title-overlay">
                                    <h1 className="fade-in-text">ABOUT US</h1>
                                    <h1 className="fade-in-text delay">FARMSTER</h1>
                                </div>
                            </div>
                        </div>
                        <div className="section second-section">
                            <Slider {...settings} className="home-slide-container">
                                <div className="home-slide-img">
                                    <img className="pajong1-img" src={process.env.PUBLIC_URL + '/images/pajong1.jpg'}alt="Slide 1" />
                                </div>
                                <div className="home-slide-img">
                                    <img className="tomato1-img" src={process.env.PUBLIC_URL + '/images/tomato1.jpg'} alt="Slide 2" />
                                </div>

                                <div className="home-slide-img">
                                    <img className="sunflower1-img" src={process.env.PUBLIC_URL + '/images/sunflower1.jpg'} alt="Slide 3" />
                                </div>
                                <div className="home-slide-img">
                                    <img className="nono1-img" src={process.env.PUBLIC_URL + '/images/nono1.jpg'} alt="Slide 4" />
                                </div>
                                <div className="home-slide-img">
                                    <img className="siru1-img" src={process.env.PUBLIC_URL + '/images/siru1.jpg'} alt="Slide 4" />
                                </div>
                            </Slider>
                        </div>
                        <div className="section">
                            <div className="intro-content">
                                <h2>우리의 비전</h2>
                                <p>Farmster는 농업의 미래를 변화시키고, 모든 농업인이 스마트한 농업 솔루션을 통해 더 나은 수확을 거둘 수 있도록 지원합니다. 우리는 지속 가능한 농업을 통해 환경을 보호하고, 지역 사회에 긍정적인 영향을 미치는 것을 목표로 합니다.</p>
                            </div>
                        </div>
                        <div className="section">
                            <div className="intro-content">
                                <h2>주요 기능</h2>
                                <ul>
                                    <li>스마트 농업 관리: IoT 기���을 활용하여 농작물의 생육 상태를 실시간으로 모니터링합니다.</li>
                                    <li>데이터 기반 의사결정: 농업 데이터를 분석하여 맞춤형 솔루션을 제공합니다.</li>
                                    <li>커뮤니티 연결: 농업인과 소비자가 직접 연결되어 신선한 농산물을 거래할 수 있습니다.</li>
                                    <li>지속 가능한 농업: 친환경 농업을 지원하고, 지속 가능한 농업 관행을 통해 환경 보호에 기여합니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="section">
                            <div className="intro-content">
                                <h2>우리의 가치</h2>
                                <p>Farmster는 농업의 혁신을 통해 더 나은 세상을 만들기 위해 노력합니다. 우리는 농업인과 소비자 모두에게 가치를 제공하고, 지속 가능한 미래를 위해 함께 나아갑니다.</p>
                                <ul>
                                    <li>신뢰: 우리는 고객과의 신뢰를 최우선으로 생각합니다.</li>
                                    <li>혁신: 최신 기술을 통해 농업의 미래를 선도합니다.</li>
                                    <li>지속 가능성: 환경을 고려한 지속 가능한 농업을 지향합니다.</li>
                                    <li>커뮤니티: 농업인과 소비자가 함께 성장하는 커뮤니티를 만듭니다.</li>
                                </ul>
                            </div>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
} 