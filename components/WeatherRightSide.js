import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { selectWeather } from '../reducers/weatherSlice';

const WeatherRightSide = () => {
  const forecasts = useSelector(selectWeather);

  console.log(forecasts);
  return(
    <RightSideContainer>
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
        Paris, France
      </CurrentCity>

      {forecasts && (
        <CurrentFeels>
          <span>Feels like {Math.round(forecasts.current.feels_like)}</span>
          <SeparationDot />
          <span>Sunset {moment.unix(forecasts.current.dt).format("HH:mm")}</span>
        </CurrentFeels>
      )}
    </RightSideContainer>
  );
};

const RightSideContainer = styled.div`
  width: 30%;
  height: auto;
  padding: 48px;
  background-color: ${props => props.theme.primaryDarkPurple};
  border-radius: 0 20px 20px 0;
`;

const TodayWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  margin: auto;
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
