import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  fetchCurrentCityForecasts,
  fetchCurrentCityImage,
} from '../reducers/weatherSlice';

import Search from '../assets/img/search.svg';

// import cities from '../utils/city.list.min.json';

const SearchCity = () => {
  const dispatch = useDispatch();
  const [citiesCompletion, setCitiesCompletion] = useState(null);
  const [cities, setCities] = useState(null);
  const [loadCitiesTry, setLoadCitiesTry] = useState(0);

  const handleInputChange = (e) => {
    const searchText = e.target.value;

    if (!searchText) return setCitiesCompletion(null);
    if (!cities) return;

    const newCitiesArray = cities.filter(city => {
      const { name } = city;
      const startWithSearch = name
        .toLowerCase()
        .replace(/-/g,' ')
        .match(new RegExp(`^${searchText}`, 'g'));

      return !!startWithSearch;
    });

    return setCitiesCompletion(newCitiesArray);
  };

  const fetchNewForecats = (city) => {
    const { lat, lon } = city.coord;
    dispatch(fetchCurrentCityForecasts(lat, lon));
    dispatch(fetchCurrentCityImage(city))
    setCitiesCompletion(null)
  };

  useEffect(() => {
    const getCities = async () => {
      const loadCities = (await import('../utils/city.list.min.json')).default;
      setCities(loadCities);
    }

    if (!cities && loadCitiesTry === 0) {
      setLoadCitiesTry(1);
      getCities();
    }

  }, [cities]);

  return(
    <SearchCityContainer>
      <InputWrapper>
        <SearchIcon src={Search} />

        <SearchInput
          placeholder='Search a new place'
          onChange={(e) => handleInputChange(e)}
          hasCitiesCompletion={citiesCompletion}
        />
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
  width: 100%;
  height: 50px;

  @media (min-width:  1280px) {
    width: 50%;
    height: 70px;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  z-index: 1;
  margin-left: 20px;
  max-height: 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: none;
  padding: 0 50px;
  color: ${props => props.theme.primaryGreyPurple};

  ${props => props.hasCitiesCompletion && `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
`;

const SearchCompletion = styled.div`
  width: 100%;
  height: auto;
  max-height: 450px;
  top: 50px;
  background-color: ${props => props.theme.primaryWhite};
  position: absolute;
  z-index: 99;
  overflow-y: scroll;

  @media (min-width:  1280px) {
    width: 50%;
    top: 70px;
  }
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
  word-break: break-word;

  &:hover {
    background-color: ${props => props.theme.backgroundBlue};
  }
`;

export default SearchCity;
