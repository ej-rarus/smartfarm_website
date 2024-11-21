import { useNavigate } from "react-router-dom";

export default function Menu({ ison, setIsOn }) {
    const navigate = useNavigate();
    
    // 드롭다운 메뉴 데이터 수정
    const menuItems = [
        {
            title: 'ABOUT US',
            path: '/aboutus',
            submenu: ['FARMSTER 소개', '프로젝트', 'CONTACT']
        },
        {
            title: 'SMART FARM',
            path: '/smartfarm',
            submenu: ['SMARTFARM', '오피스FARM', '진욱님FARM', '이끼FARM', 'HOME DEVICE']
        },
        {
            title: 'PRODUCTS',
            path: '/products',
            submenu: ['SALAD', 'TOMATOES', 'HOME DEVICE']
        },
        {
            title: 'SUSTAINABILITY',
            path: '/sustainability',
            submenu: [] // 드롭다운 없음
        }
    ];

    return (
        <div 
            className="menu-container"
            style={{
                transform: ison ? "translateX(0)" : "translateX(120%)",
                transition: "transform 0.3s ease-in-out",
            }}
        >
            <div className="menu-close-btn" onClick={() => setIsOn(false)}>
                &#10006;
            </div>
            <div className="menu-title-container">
                {menuItems.map((item, index) => (
                    <div className="menu-item" key={index}>
                        <div className="menu-title-wrapper">
                            <div 
                                className="menu-title"
                                onClick={() => {
                                    navigate(item.path);
                                    setIsOn(false);
                                }}
                            >
                                {item.title}
                            </div>
                        </div>
                        {item.submenu.length > 0 && (
                            <div className="dropdown-menu">
                                {item.submenu.map((subItem, subIndex) => (
                                    <div 
                                        className="dropdown-item" 
                                        key={subIndex}
                                        onClick={() => {
                                            navigate(`${item.path}/${subIndex + 1}`);
                                            setIsOn(false);
                                        }}
                                    >
                                        {subItem}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
