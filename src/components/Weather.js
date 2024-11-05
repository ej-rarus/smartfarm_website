import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [location] = useState({ lat: 37.5665, lon: 126.9780 }); // 서울의 위도와 경도

  // OpenWeatherMap API 키 (여기서 YOUR_API_KEY를 발급받은 API 키로 교체하세요.)
  const api = process.env.REACT_APP_WEATHER_API_KEY;
  axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${api}`)
  .then(response => {
    console.log('응답 데이터:', response.data);
  })
  .catch(error => {
    console.error('요청 실패:', error);
  });

  
  return (
    <div>
      <span>{}</span>
    </div>
  );
}
