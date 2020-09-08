import React from 'react';
import styled from 'styled-components';

import SearchCity from './SearchCity';
import FavoritesCities from './FavoritesCities';

const LeftSideContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 48px;
  border-radius: 20px;
`;

const WeatherLeftSide = () => {
  return(
    <LeftSideContainer>
      <SearchCity></SearchCity>

      <FavoritesCities />
    </LeftSideContainer>
  );
};

export default WeatherLeftSide;
