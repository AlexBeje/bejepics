import { Indicator, Transition, Burger, ActionIcon, Box } from '@mantine/core';
import { menuItems } from './Header.data';
import { ReactComponent as Logo } from '/src/assets/ab-logo--dark.svg';
import { useState } from 'react';

export function Header() {
  const [burgerOpened, setOpened] = useState(false);

  const renderBurgerIcon = () => {
    return (
      <Box className='flex-1 sm:hidden p-8'>
        <Transition
          mounted={burgerOpened}
          transition='slide-right'
          duration={200}
          timingFunction='ease'
        >
          {(styles) => (
            <div
              style={styles}
              className='fixed top-0 left-0 w-full'
              onClick={() => setOpened(() => !burgerOpened)}
            >
              <Box className='h-screen w-1/2 items-center justify-center flex flex-col  backdrop-blur-[3px] bg-white/90 shadow-gray-200 shadow-xl'>
                <Box className='flex flex-col text-4xl'>
                  {renderMenuItem(1)}
                  {renderMenuItem(2)}
                  {renderMenuItem(3)}
                  {renderMenuItem(4)}
                </Box>
              </Box>
            </div>
          )}
        </Transition>
        <ActionIcon
          variant='transparent'
          onClick={() => setOpened(() => !burgerOpened)}
        >
          <Burger
            opened={burgerOpened}
            onClick={() => setOpened(() => !burgerOpened)}
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
            flex-1 font-extralight hover:cursor-pointer hover:text-gray-500 m-2 text-center
            ${
              item.disabled &&
              'hover:cursor-default hover:text-black hover:text-opacity-[0.10] text-black text-opacity-[0.10]'
            }
            ${item.active && 'underline'}
          `}
          component={item.href ? 'a' : 'div'}
          target={item.href && item.openInNewWindow ? '_blank' : undefined}
          href={item.href}
        >
          {item.name}
        </Box>
      ));
  };

  return (
    <Box className='w-full sm:max-w-xl'>
      <Box className='items-center justify-between px-4 flex sm:hidden'>
        {renderBurgerIcon()}
        {renderLogo()}
      </Box>
      <Box className='items-center justify-between px-4 hidden sm:flex text-xl'>
        {renderMenuItem(1)}
        {renderMenuItem(2)}
        {renderLogo()}
        {renderMenuItem(3)}
        {renderMenuItem(4)}
      </Box>
    </Box>
  );
}
