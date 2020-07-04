import WeatherComponent from '../components/Weather';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Index() {
  return (
    <Container>
      <WeatherComponent />
    </Container>
  );
}
