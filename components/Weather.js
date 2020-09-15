import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchCurrentCityForecasts,
  selectWeather,
} from '../reducers/weatherSlice';

import WeatherLeftSide from './WeatherLeftSide';
import WeatherRightSide from './WeatherRightSide';

const WeatherContainer = styled.div`
  width: 80%;
  min-height: 80vh;
  height: auto;
  background-color: ${props => props.theme.backgroundBlue};
  border-radius: 20px;
  display: flex;
  align-items: stretch;
`;

const Weather = () => {
  const forecasts = useSelector(selectWeather);
  const dispatch = useDispatch();

  if (!forecasts) {
    dispatch(fetchCurrentCityForecasts());
  }

  return(
    <WeatherContainer>
      <WeatherLeftSide />
      <WeatherRightSide />
    </WeatherContainer>
  );
};

export default Weather;
