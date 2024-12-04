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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }

    return (
        <ReactFullpage
            licenseKey={''}
            navigation={true}
            scrollingSpeed={1000}
            normalScrollElements=".nav-container"
            scrollOverflow={false}
            credits={{ enabled: false }}
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
                                    <h1>FARMSTER</h1>
                                </div>
                            </div>
                        </div>
                        <div className="section second-section">
                            <Slider {...settings} className="home-slide-container">
                                <div className="home-slide-img">
                                    <img className="simble-white-img" src={process.env.PUBLIC_URL + '/images/simble-white.png'} />
                                </div>
                                <div className="home-slide-img">
                                    <img className="simble-white-img" src={process.env.PUBLIC_URL + '/images/simble-white.png'} />
                                </div>
                                <div className="home-slide-img">
                                    <img className="simble-white-img" src={process.env.PUBLIC_URL + '/images/simble-white.png'} />
                                </div>
                                <div className="home-slide-img">
                                    <img className="simble-white-img" src={process.env.PUBLIC_URL + '/images/simble-white.png'} />
                                </div>
                                <div className="home-slide-img">
                                    <img className="simble-white-img" src={process.env.PUBLIC_URL + '/images/simble-white.png'} />
                                </div>
                            </Slider>
                        </div>
                        <div className="section">
                            <div className="section-content">
                                <h2>세 번째 섹션</h2>
                            </div>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
} 