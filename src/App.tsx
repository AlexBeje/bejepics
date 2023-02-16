import { Box, ActionIcon } from '@mantine/core';
import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons';
import { ReactComponent as Logo } from '/src/assets/ab-logo--dark.svg';

function App() {
  const bottomIconsSize = 48;
  return (
    <Box className='flex flex-col items-center justify-between h-screen p-8'>
      <Logo className='h-32' />
      <h1 className='font-light text-4xl  lg:text-8xl'>{'< Site Under Construction />'}</h1>
      <Box className='flex gap-4'>
        <ActionIcon
          component='a'
          href='https://www.instagram.com/beje.pics/'
          size={bottomIconsSize}
          target='_blank'
        >
          <IconBrandInstagram size={bottomIconsSize} color='black' />
        </ActionIcon>
        <ActionIcon
          component='a'
          href='https://web.whatsapp.com/send/?phone=642954953&text&type=phone_number&app_absent=0/'
          size={bottomIconsSize}
          target='_blank'
        >
          <IconBrandWhatsapp size={bottomIconsSize} color='black' />
        </ActionIcon>
      </Box>
    </Box>
  );
}

export default App;
