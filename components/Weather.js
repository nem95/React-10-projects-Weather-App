import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.orangeDarker};
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
