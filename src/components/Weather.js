import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [location] = useState({ lat: 37.5665, lon: 126.9780 }); // 서울의 위도와 경도

  // OpenWeatherMap API 키
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric&lang=kr`
        );
        setWeather(response.data);
      } catch (err) {
        setError('날씨 정보를 가져오는데 실패했습니다.');
        console.error('API 호출 오류:', err);
      }
    };

    fetchWeather();
  }, [location, apiKey]);

  // 날씨 정보가 없으면 로딩 중 표시
  if (!weather && !error) {
    return <div className="loading">로딩 중...</div>;
  }

  // 날씨 정보가 없으면 에러 메시지 표시
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // 날씨 정보를 UI에 표시
  return (
    <div className="weather-container">
      <h1>서울 날씨</h1>
      <div className="weather-description">{weather.weather[0].description}</div>
      <div className="temperature">{weather.main.temp}°C</div>
      <div className="weather-info">습도: {weather.main.humidity}%</div>
      <div className="weather-info">풍속: {weather.wind.speed}m/s</div>
    </div>
  );
}

