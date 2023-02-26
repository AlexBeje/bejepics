import { useState } from 'react';

import { Center, Transition, Burger, ActionIcon, Box } from '@mantine/core';

import { menuItems } from './Header.data';
import { ReactComponent as Logo } from '/src/assets/ab-logo--dark.svg';

export function Header() {
  const [burgerOpened, setOpened] = useState(false);

  const renderBurgerIcon = () => {
    return (
      <Box className='flex-1 sm:hidden p-8'>
        <Transition
          mounted={burgerOpened}
          transition='slide-right'
          duration={100}
          timingFunction='ease'
        >
          {(styles) => (
            <Box
              style={styles}
              className='fixed top-0 left-0 w-full z-50'
              onClick={() => setOpened(() => !burgerOpened)}
            >
              <Box className='h-screen w-1/2 items-center justify-center flex flex-col backdrop-blur-[5px] bg-black/60 shadow-gray-900 drop-shadow-2xl min-w-fit'>
                <Box className='flex flex-col'>
                  {renderMenuItem(1)}
                  {renderMenuItem(2)}
                  {renderMenuItem(3)}
                  {renderMenuItem(4)}
                </Box>
              </Box>
            </Box>
          )}
        </Transition>
        <ActionIcon
          variant='transparent'
          onClick={() => setOpened(() => !burgerOpened)}
          className='z-50'
        >
          <Burger
            opened={burgerOpened}
            onClick={() => setOpened(() => !burgerOpened)}
            color='white'
          />
        </ActionIcon>
      </Box>
    );
  };

  const renderLogo = () => {
    return (
      <Box
        component='a'
        href='https://www.bejepics.com/'
        className='m-2 hover:cursor-pointer flex justify-end mx-8 w-fit'
      >
        <Logo className='max-h-16 w-fit mr-0 lg:m-auto' />
      </Box>
    );
  };

  const renderMenuItem = (id: number) => {
    return menuItems
      .filter((item) => item.id === id)
      .map((item) => (
        <Box
          className={`
            flex-1 font-extralight m-2 text-center text-white
            ${
              item.disabled
                ? 'text-black text-opacity-[0.30] hover:cursor-not-allowed'
                : 'hover:cursor-pointer hover:text-gray-500'
            }
            ${item.active && 'underline'}
          `}
          component='a'
          target={item.href && item.openInNewWindow ? '_blank' : undefined}
          href={item.href}
        >
          {item.name}
        </Box>
      ));
  };

  return (
    <Box className='w-full bg-gradient-to-b from-black/80 p-6'>
      <Center className='sm:max-w-xl m-auto'>
        <Box className='items-center justify-between flex sm:hidden w-full'>
          {renderBurgerIcon()}
          {renderLogo()}
        </Box>
        <Box className='items-center justify-between hidden sm:flex w-full'>
          {renderMenuItem(1)}
          {renderMenuItem(2)}
          {renderLogo()}
          {renderMenuItem(3)}
          {renderMenuItem(4)}
        </Box>
      </Center>
    </Box>
  );
}
