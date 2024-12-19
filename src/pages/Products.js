import React from 'react';

const products = [
    {
        id: 1,
        name: 'simble',
        image: process.env.PUBLIC_URL + '/images/simble-white.png', // 이미지 경로
    },
    {
        id: 2,
        name: 'sunflower',
        image: process.env.PUBLIC_URL + '/images/sunflower1.jpg', // 이미지 경로
    },
    {
        id: 3,
        name: '제품 3',
        image: '/images/product3.png', // 실제 이미지 경로로 변경
    },
    {
        id: 4,
        name: '제품 4',
        image: '/images/product4.png', // 실제 이미지 경로로 변경
    },
    {
        id: 5,
        name: '제품 5',
        image: '/images/product5.png', // 실제 이미지 경로로 변경
    },
    // 추가 제품을 여기에 추가
];

const Product = () => {
    return (
        <div className="product-container">
            <h1 className="product-title">Our Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
