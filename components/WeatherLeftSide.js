import styled from 'styled-components';

import SearchCity from './SearchCity';
import FavoritesCities from './FavoritesCities';
import Forecasts from './Forecasts';

const LeftSideContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 10px;
  border-radius: 0;

  @media (min-width:  1280px) {
    width: 70%;
    height: 100%;
    padding: 48px;
    border-radius: 20px;
  }
`;

const SearchCityWrapper = styled.div`
  display: none;

  @media (min-width:  1280px) {
    display: block;
    width: 100%;
  }
`;

const WeatherLeftSide = () => {
  return(
    <LeftSideContainer>
      <SearchCityWrapper>
        <SearchCity />
      </SearchCityWrapper>

      <FavoritesCities />

      <Forecasts />
    </LeftSideContainer>
  );
};

export default WeatherLeftSide;
