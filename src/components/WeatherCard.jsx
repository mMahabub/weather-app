import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null; // Handle no data scenario

  const { address, currentConditions } = weatherData;
  const { temp, conditions } = currentConditions;

  return (
    <Card style={{marginTop: '1rem'}}>
      <CardContent>
        <Typography variant="h5">{address}</Typography>
        <Typography variant="body1">Temperature: {temp}°C</Typography>
        <Typography variant="body1">Weather: {conditions}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;