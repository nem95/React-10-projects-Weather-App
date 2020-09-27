import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.primaryLightBlue};

  @media (min-width: 1440px) {
    height: 100vh;
  }
`;

const Layout = (props) => {
  const { children } = props;

  return(
    <LayoutContainer>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
