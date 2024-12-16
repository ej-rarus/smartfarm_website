import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container"> {/* 푸터 컨테이너 */}
                <div className="footer-logo">FARMSTER</div>
                <div className="footer-info">
                    <p>TEL: 02-123-4567</p> {/* 각 정보를 한 줄로 나누기 */}
                    <p>FAX: 02-123-4568</p>
                    <p>Email: contact@farmster.com</p>
                </div>
                <div className="footer-social">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </div>
            </div>
        </div>
    );
}