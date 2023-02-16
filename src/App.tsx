import { Box } from '@mantine/core';
import { Header } from './features/1-header/Header';

function App() {
  return (
    <Box className='flex flex-col items-center justify-between h-screen pt-8 pb-2 lg:p-8'>
      <Header />
      <h1 className='font-light text-4xl lg:text-8xl flex items-center flex-1'>
        {'< Site Under Construction />'}
      </h1>
    </Box>
  );
}

export default App;
