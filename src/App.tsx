import { Box, Container } from '@mantine/core';
import { Header } from './features/1-header/Header';
import { HeroSection } from './features/2-hero-section/HeroSection';

function App() {
  const imageUrl = new URL('./images/image1.jpg', import.meta.url).href;

  return (
    <Box className='flex flex-col min-h-screen relative items-center'>
      <Box
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='bg-left bg-cover absolute h-full w-full -z-20'
      />
      <Box className='backdrop-blur-[80px] bg-black/50 absolute h-full w-full -z-20' />
      <Container
        size='xl'
        style={{ backgroundImage: `url(${imageUrl})` }}
        className=' w-full bg-center bg-cover p-6 gap-6 absolute h-full -z-20'
      />
      <Box className='w-full h-[128px] bg-gradient-to-b from-black/80 top-0 left-0 -z-10 absolute' />
      <Container
        size='xl'
        className='flex flex-col items-center flex-1 w-full p-6 gap-6'
      >
        <Header />
        <HeroSection />
      </Container>
    </Box>
  );
}

export default App;
