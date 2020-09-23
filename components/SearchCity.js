import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchCurrentCityForecasts,
  fetchCurrentCityImage,
} from '../reducers/weatherSlice';

import cities from '../utils/city.list.json';

const SearchCity = () => {
  const dispatch = useDispatch();
  const [citiesCompletion, setCitiesCompletion] = useState(null);

  const handleInputChange = (e) => {
    const searchText = e.target.value;

    if (!searchText) return setCitiesCompletion(null);

    const newCitiesArray = cities.filter(city => {

      const { name } = city;

      return name.toLowerCase()
      .replace(/-/g,' ')
      .includes(searchText.toLowerCase());
    });

    return setCitiesCompletion(newCitiesArray);
  };

  const fetchNewForecats = (city) => {
    const { lat, lon } = city.coord;
    dispatch(fetchCurrentCityForecasts(lat, lon));
    dispatch(fetchCurrentCityImage(city))
    setCitiesCompletion(null)
  };

  return(
    <SearchCityContainer>
      <InputWrapper>
        <SearchIcon className="fa fa-search" aria-hidden="true" />

        <SearchInput placeholder='Search a new place' onChange={(e) => handleInputChange(e)}/>
      </InputWrapper>

      {citiesCompletion && (
        <SearchCompletion>
          <SearchCompletionList>
            {citiesCompletion.slice(0, 50).map((city, i) => (
              <SearchCompletionListItem onClick={() => fetchNewForecats(city)} key={i.toString()}>
                {city.name} / {city.country}
              </SearchCompletionListItem>
            ))}
          </SearchCompletionList>
        </SearchCompletion>
      )}

    </SearchCityContainer>
  );
};

const SearchCityContainer = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 20px;
  position: relative;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  height: 70px;
`;

const SearchIcon = styled.i`
  position: absolute;
  z-index: 1;
  margin-left: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: none;
  padding: 0 50px;
  color: ${props => props.theme.primaryGreyPurple};
`;

const SearchCompletion = styled.div`
  width: 50%;
  height: auto;
  max-height: 450px;
  background-color: ${props => props.theme.primaryWhite};
  position: absolute;
  z-index: 99;
  top: 70px;
  overflow-y: scroll;
`;

const SearchCompletionList = styled.ul`
  padding: 20px;
`;

const SearchCompletionListItem = styled.li`
  height: 40px;
  width: 100%;
  background-color: ${props => props.theme.lightBlueGrey};
  list-style: none;
  margin: 5px 0;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.backgroundBlue};
  }
`;

export default SearchCity;
