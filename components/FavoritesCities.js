import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectCity } from '../reducers/weatherSlice';

const FavoritesCities = (props) => {
  const city = useSelector(selectCity);

  return(
    <CitiesContainer>
      <CityName>{city && city.name}</CityName>
      <CitiesWrapper>
        <City>
          {city && city.photos && (
            <CityImg src={city.photos.src.landscape}/>
          )}
        </City>
      </CitiesWrapper>
    </CitiesContainer>
  );
};

const CityName = styled.h1`
  text-transform: capitalize;
  margin: 0;
  margin-bottom: 15px;
`;

const CitiesContainer = styled.div`
  width: 100%;
  height: auto;
`;

const CitiesWrapper = styled.div`
  width: calc(100% + 20px);
  margin-left: -10px;
  /* height: 100%; */
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (min-width:  1280px) {
    width: 100%;
    margin-left: 0;
  }

`;

const City = styled.div`
  width: 100%;
  min-height: 180px;
  height: auto;
  max-height: 200px;
  overflow: hidden;
  font-size: ${props => props.theme.fontSizeSmall}px;
  text-align: center;

  &:first-child {
    min-height: 200px;
    height: auto;
  }

  @media (min-width:  1280px) {
    border-radius: 20px;
  }
`;

const CityImg = styled.img`
  width: 100%;
  height: auto;

  @media (min-width:  1280px) {
    transform: translateY(-25%);
  }
`;

export default FavoritesCities;
