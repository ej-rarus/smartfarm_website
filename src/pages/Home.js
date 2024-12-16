import { useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }
    
    return (
        <div className="home-container">
            <div className="home-img-container">
                <img className="fresh-vegetables-img" src={process.env.PUBLIC_URL + '/images/fresh_vegetables.jpg'} />
            </div>
            
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
            
            <div className="video-container">
                <video className="team-video" autoPlay muted loop>
                    <source src={process.env.PUBLIC_URL + '/videos/team-video.mp4'} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}