import { Checkbox, Box } from '@mantine/core';
import { Header } from './features/1-header/Header';

function App() {
  return (
    <Box className='flex flex-col items-center justify-between h-screen pt-8 pb-2 lg:p-8'>
      <Header />
      <Box className='flex-1  font-extralight flex justify-center flex-col gap-4 sm:min-w-[600px]'>
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
    </Box>
  );
}

export default App;
