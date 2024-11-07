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
  let img_file_name = "";

  switch(weather.weather[0].description) {
    case '맑음':
      img_file_name = "맑음.jpg";
      break;
    case '구름 조금':
      img_file_name = "구름 조금.jpg";
      break;
    case '흐림':
      img_file_name = "흐림.jpg";
      break;
    case '비':
      img_file_name = "비.jpg";
      break;
    case '눈':
      img_file_name = "눈.jpg";
      break;
    case '안개':
      img_file_name = "안개.jpg";  
      break;
  }
  return (
    <div className="weather-container">
      <img className="weather-img" src={`${process.env.PUBLIC_URL}/images/${img_file_name}`}></img>
      <div className= "weather-text">
        <h1>서울 날씨</h1>
        <div className="weather-description">{weather.weather[0].description}</div>
        <div className="temperature">{weather.main.temp}°C</div>
        <div className="weather-info">습도: {weather.main.humidity}%</div>
        <div className="weather-info">풍속: {weather.wind.speed}m/s</div>
      </div>

    </div>
  );
}

