import { ActionIcon } from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons';
import { ReactComponent as Logo } from '/src/assets/ab-logo--dark.svg';

function App() {
  return (
    <div className='flex flex-col items-center justify-between h-screen p-8'>
      <Logo className='h-32' />
      <h1 className='font-light text-8xl'>{'< Site Under Construction />'}</h1>
      <ActionIcon
        component='a'
        href='https://www.instagram.com/beje.pics/'
        size={64}
        target='_blank'
      >
        <IconBrandInstagram size={64} color='black' />
      </ActionIcon>
    </div>
  );
}

export default App;
