import { Box, ActionIcon } from '@mantine/core';
import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons';
import { Header } from './features/1-header/Header';

function App() {
  const bottomIconsSize = 48;

  return (
    <Box className='flex flex-col items-center justify-between h-screen pt-8 pb-2 lg:p-8 text-lg'>
      <Header />
      <h1 className='font-light text-4xl  lg:text-8xl'>
        {'< Site Under Construction />'}
      </h1>
      <Box className='flex gap-4'>
        <ActionIcon
          component='a'
          href='https://www.instagram.com/beje.pics/'
          size={bottomIconsSize}
          target='_blank'
        >
          <IconBrandInstagram size={bottomIconsSize} color='black' />
        </ActionIcon>
      </Box>
    </Box>
  );
}

export default App;
