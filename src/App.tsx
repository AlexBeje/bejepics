import { Box, Container } from '@mantine/core';
import { Header } from './features/1-header/Header';
import { HeroSection } from './features/2-hero-section/HeroSection';

function App() {
  const imageUrl = new URL('./images/image1.jpg', import.meta.url).href;

  return (
    <Box
      style={{ backgroundImage: `url(${imageUrl})` }}
      className='bg-left-top bg-cover'
    >
      <Box className='bg-black/40 backdrop-blur-[80px]'>
        <Container size='xl' className='p-0'>
          <Box
            style={{ backgroundImage: `url(${imageUrl})` }}
            className='bg-left-top bg-cover min-h-screen flex flex-col items-center'
          >
            <Header />
            <HeroSection />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
