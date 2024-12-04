import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo">FARMSTER</div>
                <div className="footer-info">
                    <p>사업자등록번호: 123-45-67890 | 대표: 홍길동</p>
                    <p>서울특별시 강남구 테헤란로 123</p>
                    <p>TEL: 02-123-4567 | FAX: 02-123-4568 | Email: contact@farmster.com</p>
                </div>
                <div className="footer-social">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </div>
            </div>
        </div>
    );
}