import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useSelector } from 'react-redux';

import { selectWeather } from '../reducers/weatherSlice';

const Forecasts = () => {
  const forecasts = useSelector(selectWeather);

  return(
    <ForecastContainer>
      <FiltersWrapper>
        <Filter isActive={true}>Day</Filter>
        <Filter>Week</Filter>
      </FiltersWrapper>

      <ForecastsWrapper>
        {forecasts && forecasts.daily.map((forecast, i) => {
          const { dt, humidity, weather, temp } = forecast;

          return (
            <Forecast>
              <div>{moment.unix(dt).format("dddd")}</div>
              <div>{humidity}%</div>

              <ForecastImg src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />

              <div>{Math.round(temp.min)}°C</div>

              <TempProgressBar>
                <ProgressBarWrapper>
                  <ProgressBar temp="cold" minTemp={temp.min} />
                </ProgressBarWrapper>
                <ProgressBarWrapper>
                  <ProgressBar temp="hot" maxTemp={temp.max} />
                </ProgressBarWrapper>
              </TempProgressBar>

              <div>{Math.round(temp.max)}°C</div>
            </Forecast>
          );
        })}
      </ForecastsWrapper>
    </ForecastContainer>
  );
};

const ForecastContainer = styled.div`
  width: 100%;
  height: auto;
`;

const FiltersWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Filter = styled.li`
  color: ${props => props.theme.primaryGreyPurple};
  list-style: none;
  font-size: ${props => props.theme.fontSizeDefault}px;
  margin: 0 15px;
  position: relative;
  cursor: pointer;

  ${props => props.isActive && `
    color: ${props.theme.primaryPurple};
    font-weight: 700;
    display: flex;
    justify-content: center;

    &::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      bottom: -15px;
      background-color: ${props.theme.primaryPurple};
    }
  `}
`;

const ForecastsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Forecast = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px 0;

  > div {
    display: flex;
    justify-content: center;
    flex: 1 1 20%;
    color: ${props => props.theme.primaryPurple};

    &:first-child {
      margin-left: 15px;
      justify-content: flex-start;
    }

    &:last-child {
      margin-right: 15px;
      justify-content: flex-end;
      font-weight: 700;
    }
  }
`;

const ForecastImg = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const TempProgressBar = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

const ProgressBarWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin: 0;

  &::after {
    content: '';
    width: 100%;
    border: 1px dashed ${props => props.theme.primaryGreyPurple};
    z-index: 0;
  }

  &:first-child {
    height: 30px;
    border-right: 1px dashed ${props => props.theme.primaryGreyPurple};
    z-index: 0;
  }
`;

const ProgressBar = styled.div`
  height: 4px;
  border-radius: 4px;
  z-index: 1;
  margin: 0;

  ${props => props.temp && props.temp === "cold" && `
    position: absolute;
    width: ${props.minTemp && 100 - ((props.minTemp * 100) / 20)}%;
    background: ${props.theme.primaryLightBlue};
  `}

  ${props => props.temp && props.temp === "hot" && `
    width: ${props.maxTemp && ((props.maxTemp - 20) * 100) / 20}%;
    background: ${props.theme.primaryRed};
    position: absolute;
    left: 0;
  `}
`;

export default Forecasts;
