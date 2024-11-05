import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate} from "react-router-dom";


export default function Nav() {

    const navigate = useNavigate();
    return(
        <div className="nav-container">
            <div className="logo">FARMSTER</div>

            <div className="nav-btn-container">
                <div className="nav-btn" onClick={()=>{navigate('/about');}}><FontAwesomeIcon icon={faBars} /></div>
                <div className="nav-btn" onClick={()=>{navigate('/about');}}>ABOUT</div>
                <div className="nav-btn" onClick={()=>{navigate('/contact');}}>CONTACT</div>
                <div className="nav-btn" onClick={()=>{navigate('/Mypage');}}>MYPAGE</div>
            </div>
        </div>
    )
}