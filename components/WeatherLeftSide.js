import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SearchCity from './SearchCity';
import FavoritesCities from './FavoritesCities';
import Forecasts from './Forecasts';

const LeftSideContainer = styled.div`
  width: 70%;
  height: 100%;
  padding: 48px;
  border-radius: 20px;
`;

const WeatherLeftSide = () => {
  const [forecasts, setForecasts] = useState(null);
  const [cities, setCities] = useState([
    {
      name: 'Berlin',
      country: 'Allemagne',
    },
    {
      name: 'Paris',
      country: 'France',
    },
    {
      name: 'New York',
      country: 'USA',
    },
  ]);

  async function getImageUrl (city) {
    const url = `https://api.teleport.org/api/urban_areas/slug:${city.replace(' ', '-').toLowerCase()}/images/`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      return data.photos[0].image.mobile;
    } catch (error) {
      console.log(error);
    }
  };

  async function getForecasts (lat = 48.85341, lon = 2.3488) {
    if (!process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY) return null;

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      return setForecasts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      if(!cities[0].imgUrl) {
        const updatedCities = cities.slice();

        updatedCities.forEach(async (city, i) => {
          const imgUrl = await getImageUrl(city.name);

          updatedCities[i].imgUrl = imgUrl;
        });

        setCities(updatedCities);
      }

      if (!forecasts) {
        getForecasts();
      }

      return () => {};
    },
    [cities, forecasts],
  );

  return(
    <LeftSideContainer>
      <SearchCity></SearchCity>

      <FavoritesCities cities={cities} />

      <Forecasts forecasts={forecasts}/>
    </LeftSideContainer>
  );
};

export default WeatherLeftSide;
