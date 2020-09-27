import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { selectWeather, selectCity } from '../reducers/weatherSlice';
import FavoritesCities from './FavoritesCities';
import RainChance from './RainChance';
import SearchCity from './SearchCity';

const WeatherRightSide = () => {
  const forecasts = useSelector(selectWeather);
  const city = useSelector(selectCity);

  return(
    <RightSideContainer>
      <SearchCity />

      <TodayWrapper>
        {forecasts && (
          <ForecastImg src={`https://openweathermap.org/img/wn/${forecasts.current.weather[0].icon}@2x.png`} />
        )}

        <Today>
          <span>Today</span>
          <Date> Sat, 3 Aug </Date>
        </Today>
      </TodayWrapper>

      <CurrentTempWrapper>
        {forecasts && (
          <CurrentTemp>{Math.round(forecasts.current.temp)}</CurrentTemp>
        )}
      </CurrentTempWrapper>

      <CurrentCity>
        {city.name}, {city.country || city.country}
      </CurrentCity>

      {forecasts && (
        <CurrentFeels>
          <span>Feels like {Math.round(forecasts.current.feels_like)}</span>
          <SeparationDot />
          <span>Sunset {moment.unix(forecasts.current.sunset).format("HH:mm")}</span>
        </CurrentFeels>
      )}

      <FavoritesCities />

      <RainChance />
    </RightSideContainer>
  );
};

const RightSideContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-top: 50px;
  background-color: ${props => props.theme.primaryDarkPurple};

  @media (min-width: 1440px) {
    width: 30%;
    height: 100%;
    padding: 48px;
    padding-top: 150px;
    border-radius: 0 20px 20px 0;
  }
`;

const TodayWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  margin: auto;

  @media (min-width: 1440px) {
    height: 150px;
  }
`;

const ForecastImg = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const Today = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.primaryWhite};
  font-size: ${props => props.theme.fontSizeLarge}px;
  text-align: center;
`;

const Date = styled.span`
  font-size: ${props => props.theme.fontSizeSmall}px;
  color: ${props => props.theme.primaryGreyPurple};
  text-align: left;
`;

const CurrentTempWrapper = styled.div`
  margin: 15px auto;
  text-align: center;
`;

const CurrentTemp = styled.span`
  color: ${props => props.theme.primaryWhite};
  font-size: 64px;
  line-height: 64px;
  font-weight: 300;
  position: relative;

  &::after {
    content: '°C';
    color: ${props => props.theme.primaryWhite};
    font-size: ${props => props.theme.fontSizeDefault}px;
    position: absolute;
    right: -20px;
    top: 0;
  }
`;

const CurrentCity = styled.div`
  font-size: ${props => props.theme.fontSizeSmall}px;
  color: ${props => props.theme.primaryGreyPurple};
  text-align: center;
`;

const CurrentFeels = styled.div`
  font-size: ${props => props.theme.fontSizeSmall}px;
  color: ${props => props.theme.primaryGreyPurple};
  text-align: center;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SeparationDot = styled.span`
  margin: 0 15px;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryGreyPurple};
`;

export default WeatherRightSide;
