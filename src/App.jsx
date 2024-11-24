import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import SearchBox from './components/SearchBox';
import WeatherCard from './components/WeatherCard';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch weather data using WeatherAPI
    fetchWeatherData(city);
  };

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_WEATHER_SERVICE_URL}/${city}?key=${import.meta.env.VITE_WEATHER_API_KEY}&include=current&contentType=json`);
      const data = await response.json();   
      console.log('data', data);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}><Header /></Box>
        <SearchBox value={city} onChange={handleCityChange} onSubmit={handleSubmit} />
        {weatherData && <WeatherCard weatherData={weatherData} />}
        <Box sx={{ my: 4 }}><Footer /></Box>
      </Container>
    </Box>
  );
}

export default App;