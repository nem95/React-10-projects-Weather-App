import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectCity } from '../reducers/weatherSlice';

const AddCity = styled.div`
  width: 20%;
  height: 180px;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.primaryDarkPurple};
  color: ${props => props.theme.primaryDarkPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

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
  width: 100%;
  // height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const City = styled.div`
  width: 100%;
  min-height: 180px;
  height: auto;
  max-height: 200px;
  overflow: hidden;
  border-radius: 20px;
  font-size: ${props => props.theme.fontSizeSmall}px;
  text-align: center;

  &:first-child {
    min-height: 200px;
    height: auto;
  }
`;

const CityImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  filter: contrast(125%);
  transform: translateY(-25%);
`;

export default FavoritesCities;