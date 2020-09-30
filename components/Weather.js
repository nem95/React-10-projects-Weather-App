import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchCurrentCityForecasts,
  fetchCurrentCityImage,
  selectWeather,
} from '../reducers/weatherSlice';

import WeatherLeftSide from './WeatherLeftSide';
import WeatherRightSide from './WeatherRightSide';

const WeatherContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  height: auto;
  background-color: ${props => props.theme.backgroundBlue};
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  justify-content: flex-start;

  @media (min-width:  1280px) {
    width: 85%;
    flex-direction: row;
    border-radius: 20px;
  }
`;

const Weather = () => {
  const forecasts = useSelector(selectWeather);
  const dispatch = useDispatch();

  if (!forecasts) {
    dispatch(fetchCurrentCityForecasts());
    dispatch(fetchCurrentCityImage());
  }

  return(
    <WeatherContainer>
      <WeatherLeftSide />
      <WeatherRightSide />
    </WeatherContainer>
  );
};

export default Weather;
