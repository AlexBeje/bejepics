import { Container, Box, Checkbox } from '@mantine/core';
import { Header } from './features/1-header/Header';
import { HeroSection } from './features/2-hero-section/HeroSection';

function App() {
  return (
    <Container className='min-h-screen flex flex-col'>
      <Header />
      <HeroSection />
      <Box className='hidden sm:flex flex-1 font-extralight justify-center flex-col gap-4 sm:min-w-[600px]'>
        <h1 className='text-4xl lg:text-6xl mb-6 text-center'>
          {'< Website En Construcción />'}
        </h1>
        <Checkbox
          label='Navegación'
          size='xl'
          description='Se ha diseñado y desarrollado la versión desktop y movil del menú.'
          checked
        />
        <Checkbox
          label='Sección hero'
          size='xl'
          description='La sección hero provisional está diseñada y se va a codificar durante los próximos días.'
          checked={false}
        />
      </Box>
    </Container>
  );
}

export default App;
