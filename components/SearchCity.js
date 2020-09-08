import React from 'react';
import styled from 'styled-components';

const SearchCityContainer = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 20px;
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

const SearchCity = () => {
  return(
    <SearchCityContainer>
      <InputWrapper>
        <SearchIcon className="fa fa-search" aria-hidden="true" />

        <SearchInput placeholder='Search a new place'></SearchInput>
      </InputWrapper>
    </SearchCityContainer>
  );
};

export default SearchCity;
