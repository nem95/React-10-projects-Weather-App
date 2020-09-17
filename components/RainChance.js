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
          <div>sunny</div>
          <div>rainy</div>
          <div>heavy rain</div>
        </RainLevelWrapper>

        <RainLevelGraph>
          {[...Array(6).keys()].map((item, i) => (
            <RainLevelGraphItem>
              <RainLevelGraphItemTime>10AM</RainLevelGraphItemTime>
            </RainLevelGraphItem>
          ))}
        </RainLevelGraph>
      </RainChanceGraph>
    </RainChanceContainer>
  );
};

const RainChanceContainer = styled.div`
  width: 100%;
  height: auto;
  color: ${props => props.theme.primaryWhite};
`;

const RainChanceGraph = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const RainLevelWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: auto;
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
`;

const RainLevelGraphItemTime = styled.div`

`;

export default RainChance;
