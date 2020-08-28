import React from 'react';
import styled from 'styled-components';

import WeatherLeftSide from './WeatherLeftSide';
import WeatherRightSide from './WeatherRightSide';

const WeatherContainer = styled.div`
  width: 80%;
  height: 80vh;
  background-color: ${props => props.theme.backgroundBlue};
  border-radius: 20px;
  display: flex;
`;

const Weather = () => {
  return(
    <WeatherContainer>
      <WeatherLeftSide />
      <WeatherRightSide />
    </WeatherContainer>
  );
};

export default Weather;
