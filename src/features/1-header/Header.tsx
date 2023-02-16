import { Box } from '@mantine/core';
import { menuItems } from './Header.data';
import { ReactComponent as Logo } from '/src/assets/ab-logo--dark.svg';

export function Header() {
  const renderMenuItem = (id: number) => {
    return menuItems
      .filter((item) => item.id === id)
      .map((item) => (
        <Box
          className={`
            flex-1 text-center m-2 hover:text-gray-500 hover:cursor-pointer font-extralight
            ${
              item.disabled &&
              'text-black hover:text-black hover:text-opacity-[0.10] hover:cursor-default text-opacity-[0.10]'
            }
            ${item.active && 'underline'}
          `}
          component={item.href ? 'a' : 'div'}
          target={item.href && '_blank'}
          href={item.href}
        >
          {item.name}
        </Box>
      ));
  };

  return (
    <Box className='flex justify-between items-center w-full px-4 sm:max-w-xl'>
      {renderMenuItem(1)}
      {renderMenuItem(2)}
      <Logo className='h-16 w-fit flex-1 m-2' />
      {renderMenuItem(3)}
      {renderMenuItem(4)}
    </Box>
  );
}
