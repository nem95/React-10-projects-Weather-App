import styled from 'styled-components';

import SearchCity from './SearchCity';
import FavoritesCities from './FavoritesCities';
import Forecasts from './Forecasts';

const LeftSideContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 0;

  @media (min-width: 1440px) {
    width: 70%;
    height: 100%;
    padding: 48px;
    border-radius: 20px;
  }
`;

const WeatherLeftSide = () => {
  return(
    <LeftSideContainer>
      <SearchCity />

      <FavoritesCities />

      <Forecasts />
    </LeftSideContainer>
  );
};

export default WeatherLeftSide;
