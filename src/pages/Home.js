import { useEffect } from "react"
import Weather from "../components/Weather"


export default function Home() {
    
    return (
        <div className="home-container">
            <div className="home-img-container">
                <img className="fresh-vegetables-img" src={process.env.PUBLIC_URL + 'images/fresh_vegetables.jpg'} />
            </div>
            <div className="home-slide-container">
                <div className="home-slide-img">
                    <img className="simble-white-img" src={process.env.PUBLIC_URL + 'images/simble-white.png'} />
                </div>
                <div className="home-slide-img">
                    <img className="simble-white-img" src={process.env.PUBLIC_URL + 'images/simble-white.png'} />
                </div>
                <div className="home-slide-img">
                    <img className="simble-white-img" src={process.env.PUBLIC_URL + 'images/simble-white.png'} />
                </div>

            </div>
        </div>
    )
}