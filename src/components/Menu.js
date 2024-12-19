import { useNavigate } from "react-router-dom";

export default function Menu({ ison, setIsOn }) {
    const navigate = useNavigate();
    
    // 드롭다운 메뉴 데이터 수정
    const menuItems = [
        {
            title: 'ABOUT US',
            path: '/aboutus',
            submenu: [
                { name: 'FARMSTER 소개', path: '/aboutus/1' },
                { name: '프로젝트', path: '/aboutus/2' },
                { name: 'CONTACT', path: '/aboutus/3' }
            ]
        },
        {
            title: 'SMART FARM',
            path: '/smartfarm',
            submenu: [
                { name: 'SMARTFARM', path: '/smartfarm/' },
                { name: '오피스FARM', path: '/smartfarm/officefarm' },
                { name: '이끼FARM', path: '/smartfarm/mossfarm' },
                { name: 'HOME DEVICE', path: '/smartfarm/homedevice' }
            ]
        },
        {
            title: 'PRODUCTS',
            path: '/products',
            submenu: []
        },
        {
            title: 'SUSTAINABILITY',
            path: '/sustainability',
            submenu: []
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
                        <div 
                            className="menu-title"
                            onClick={() => {
                                navigate(item.path);
                                setIsOn(false);
                            }}
                        >
                            {item.title}
                        </div>
                        {item.submenu.length > 0 && (
                            <div className="dropdown-menu">
                                {item.submenu.map((subItem, subIndex) => (
                                    <div 
                                        className="dropdown-item" 
                                        key={subIndex}
                                        onClick={() => {
                                            navigate(subItem.path);
                                            setIsOn(false);
                                        }}
                                    >
                                        {subItem.name}
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
