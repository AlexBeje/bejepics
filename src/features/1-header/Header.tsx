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
            flex-1 font-extralight hover:cursor-pointer hover:text-gray-500 m-2 text-center text-xl
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
    <Box className='flex items-center justify-between px-4 sm:max-w-xl w-full'>
      {renderMenuItem(1)}
      {renderMenuItem(2)}
      <Logo className='h-16 w-fit flex-1 m-2' />
      {renderMenuItem(3)}
      {renderMenuItem(4)}
    </Box>
  );
}
