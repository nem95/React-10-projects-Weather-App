import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectWeather } from '../reducers/weatherSlice';

const RainChance = () => {
  const forecasts = useSelector(selectWeather);

  return(
    <RainChanceContainer>
      Chance of rain
      {forecasts && true}

      <RainChanceGraph>
        <RainLevelWrapper>
          <div>heavy rain</div>
          <div>rainy</div>
          <div>sunny</div>
        </RainLevelWrapper>

        <RainLevelGraph>
          {forecasts && forecasts.hourly.slice(0, 6).map((item, i) => {
            const date = new Date(item.dt * 1000);
            const time = new Intl.DateTimeFormat('fr-FR', {
              formatMatcher: 'best fit',
              hour: '2-digit'
            }).format(date);

            return (
              <RainLevelGraphItem key={i.toString()}>
                <RainLevelGraphItemLevel>
                  <ProgressBar isCurrent="false" pop={item.pop * 100} />
                </RainLevelGraphItemLevel>
                <RainLevelGraphItemTime>{time}</RainLevelGraphItemTime>
              </RainLevelGraphItem>
            );
          })}
        </RainLevelGraph>
      </RainChanceGraph>
    </RainChanceContainer>
  );
};

const RainChanceContainer = styled.div`
  width: 100%;
  height: auto;
  color: ${props => props.theme.primaryWhite};
  margin-top: 50px;
`;

const RainChanceGraph = styled.div`
  width: 100%;
  height: 245px;
  display: flex;
  margin-top: 30px;
`;

const RainLevelWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;
  justify-content: space-between;
`;

const RainLevelGraph = styled.div`
  display: flex;
  flex: 4;
  justify-content: space-between;
  padding: 0 5px;
`;

const RainLevelGraphItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const RainLevelGraphItemTime = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
`;

const RainLevelGraphItemLevel = styled.div`
  height: 75%;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    /* background-color: ${props => props.theme.primaryGreyPurple}; */
    z-index: 0;
    background-image: linear-gradient( 89deg,  rgba(243,156,0,1) 15.1%, rgba(255,249,26,1) 35.1%, rgba(61,195,255,1) 54.7%, rgba(61,247,255,1) 87.5% );  }
`;

const ProgressBar = styled.div`
  width: 100%;
  border-radius: 15px;
  z-index: 1;
  margin: 0;

  ${props => props.pop && `
    bottom: 0;
    height: ${props.pop}%;
    background: ${props.theme.primaryLightBlue};
  `}
`;

export default RainChance;
