import { useNavigate } from "react-router-dom";

export default function Menu({ ison, setIsOn }) {
    const navigate = useNavigate();

    return (
        <div
            className="menu-container"
            style={{
                transform: ison ? "translateX(0)" : "translateX(120%)", // 메뉴가 오른쪽에서 슬라이딩
                transition: "transform 0.3s ease-in-out", // 슬라이딩 애니메이션
            }}
        >
            <div className="menu-close-btn" onClick={() => setIsOn(false)}>
                &#10006; {/* X 버튼 */}
            </div>
            <div className="menu-title-container">
            <div className="menu-title" onClick={() => navigate('/about')}>
                ABOUT
            </div>
            <div className="menu-title" onClick={() => navigate('/contact')}>
                CONTACT
            </div>
            <div className="menu-title" onClick={() => navigate('/Mypage')}>
                MYPAGE
            </div>
            </div>

        </div>
    );
}
