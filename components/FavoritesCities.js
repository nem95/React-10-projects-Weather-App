import React from 'react';
import styled from 'styled-components';

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
  font-size: ${props => props.theme.fontSizeSmall}px;
  text-align: center;

  &:first-child {
    min-height: 200px;
    height: auto;
  }
`;

const CityImg = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 20px;
  filter: contrast(125%);

  ${props => props.isFirst && `
    height: 200px;
  `}
`;

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
  const { cities } = props;

  return(
    <CitiesContainer>
      <CitiesWrapper>
        {cities.map((city, i) => (
          <City key={i.toString()} >
            <CityImg src={city.imgUrl && city.imgUrl} isFirst={i === 0 ? true : false} />
            {city.name}, {city.country}
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
