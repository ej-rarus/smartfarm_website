import { useEffect } from "react"
import Weather from "../components/Weather"


export default function Home() {
    
    return (
        <div className="home_img_container">
            <img src={process.env.PUBLIC_URL + '/fresh-vegetables.jpg'} />
        </div>
    )
}