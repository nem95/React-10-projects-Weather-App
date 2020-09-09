import React from 'react';
import styled from 'styled-components';

const RightSideContainer = styled.div`
  width: 30%;
  height: 100%;
  padding: 48px;
  background-color: ${props => props.theme.primaryDarkPurple};
  border-radius: 0 20px 20px 0;
`;

const WeatherRightSide = () => {
  return(
    <RightSideContainer>
      <div>
        Today
        <div> DATE </div>
      </div>
      <div>
        28
      </div>
    </RightSideContainer>
  );
};

export default WeatherRightSide;
