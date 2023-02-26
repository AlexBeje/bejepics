import { Box} from '@mantine/core';
import { Header } from './features/1-header/Header';
import { HeroSection } from './features/2-hero-section/HeroSection';

function App() {
  return (
    <Box className='flex flex-col relative min-h-screen items-center'>
      <Header />
      <HeroSection />
    </Box>
  );
}

export default App;
