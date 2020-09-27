import WeatherComponent from '../components/Weather';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundBlue};

  @media (min-width: 1440px) {
    height: 100vh;
  }
`;

export default function Index() {
  return (
    <Container>
      <WeatherComponent />
    </Container>
  );
}
