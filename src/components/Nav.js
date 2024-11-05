import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Nav({ ison, setIsOn }) {
    const navigate = useNavigate();

    return (
        <div className="nav-container">
            <div className="logo" onClick={() => navigate('/')}>FARMSTER</div>
            <div className="nav-btn-container">
                <div
                    className="nav-btn"
                    onClick={() => setIsOn(!ison)} // 버튼 클릭 시 메뉴 열기/닫기
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    );
}
