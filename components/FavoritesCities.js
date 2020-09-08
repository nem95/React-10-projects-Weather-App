import React from 'react';
import styled from 'styled-components';

import SearchCity from './SearchCity';

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
  width: 20%;
  min-height: 180px;
  height: auto;
  border-radius: 20px;
  border: 1px solid red;

  &:first-child {
    min-height: 200px;
    height: auto;
  }
`;

const CityImg = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 20px;
`;

const AddCity = styled.div`
  width: 20%;
  height: 180px;
  border-radius: 20px;
  border: 1px solid red;

  &:first-child {
    height: 200px;
  }
`;

const FavoritesCities = () => {
  const url = "https://api.teleport.org/api/urban_areas/slug:new-york/images/"
  const cities = [
    {
      name: 'berlin',
      country: 'Allemagne'
    },
    {
      name: 'Paris',
      country: 'France'
    },
    {
      name: 'New York',
      country: 'USA'
    },
  ];

  return(
    <CitiesContainer>
      <CitiesWrapper>
        {cities.map((city, i) => (
          <City>
            <CityImg src="https://via.placeholder.com/200.png?" />
            {city.name} {city.country}
          </City>
        ))}

        <AddCity>
          +
          Add city
        </AddCity>
      </CitiesWrapper>
    </CitiesContainer>
  );
};

export default FavoritesCities;
