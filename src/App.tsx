import { Box, Container } from '@mantine/core';
import { Header } from './features/1-header/Header';
import { HeroSection } from './features/2-hero-section/HeroSection';

function App() {
  const imageUrl = new URL('./images/image1.jpg', import.meta.url).href;

  return (
    <Box className='bg-black/40 backdrop-blur-[80px]'>
      <Box
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='bg-left bg-cover min-h-screen flex flex-col'
      >
        <Header />
        <Container
          size='xl'
          className='flex flex-col items-center flex-1 w-full'
        >
          <HeroSection />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
