import React, { useState } from 'react';

export default function Contact() {
    const [inquiryType, setInquiryType] = useState('business');

    return (
        <div className="contact-container">
            {/* 헤더 섹션 */}
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>스마트팜의 미래를 함께 만들어가는 팜스터입니다.</p>
            </div>

            {/* 주요 연락처 정보 */}
            <div className="contact-info-grid">
                <div className="card-wrapper">
                    <div className="info-card">
                        <h3>Business Development</h3>
                        <p>스마트팜 도입 및 협력 문의</p>
                        <p>☎ 02-XXX-XXXX</p>
                        <p>✉ business@farmster.com</p>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="info-card">
                        <h3>Technical Support</h3>
                        <p>기술 지원 및 유지보수 문의</p>
                        <p>☎ 02-XXX-XXXX</p>
                        <p>✉ support@farmster.com</p>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="info-card">
                        <h3>Product Inquiry</h3>
                        <p>제품 상담 및 견적 문의</p>
                        <p>☎ 02-XXX-XXXX</p>
                        <p>✉ product@farmster.com</p>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="info-card">
                        <h3>Demo Request</h3>
                        <p>스마트팜 데모 체험 신청</p>
                        <p>☎ 02-XXX-XXXX</p>
                        <p>✉ demo@farmster.com</p>
                    </div>
                </div>
            </div>
            <div className="contact-section-divider"></div>

            {/* 문의 양식 */}
            <div className="contact-form-container">
                <h2>문의하기</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label>문의 유형</label>
                        <select 
                            value={inquiryType} 
                            onChange={(e) => setInquiryType(e.target.value)}
                        >
                            <option value="business">사업 제휴 문의</option>
                            <option value="technical">기술 지원 문의</option>
                            <option value="product">제품 문의</option>
                            <option value="demo">데모 신청</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>회사명</label>
                        <input type="text" placeholder="회사명을 입력해주세요" />
                    </div>
                    <div className="form-group">
                        <label>담당자명</label>
                        <input type="text" placeholder="담당자명을 입력해주세요" />
                    </div>
                    <div className="form-group">
                        <label>연락처</label>
                        <input type="tel" placeholder="연락처를 입력해주세요" />
                    </div>
                    <div className="form-group">
                        <label>이메일</label>
                        <input type="email" placeholder="이메일을 입력해주세요" />
                    </div>
                    <div className="form-group">
                        <label>문의내용</label>
                        <textarea 
                            placeholder="문의하실 내용을 자세히 적어주세요" 
                            rows="5"
                        />
                    </div>
                    <button type="submit" className="submit-btn">문의하기</button>
                </form>
            </div>

            {/* 오시는 길 */}
            <div className="location-container">
                <h2>오시는 길</h2>
                <div className="map-container">
                    {/* Google Maps will be embedded here */}
                </div>
                <div className="address-info">
                    <p>주소: 서울특별시 강남구 테헤란로 XXX</p>
                    <p>지번: XXX-XXX</p>
                </div>
            </div>
        </div>
    );
}