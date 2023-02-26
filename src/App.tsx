import { Container, Box, Checkbox } from '@mantine/core';
import { Header } from './features/1-header/Header';
import { HeroSection } from './features/2-hero-section/HeroSection';

function App() {
  return (
    <Container className='min-h-screen flex flex-col'>
      <Header />
      <HeroSection />
    </Container>
  );
}

export default App;
