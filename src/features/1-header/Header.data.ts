import { MenuItems } from './Header.type';

export const menuItems: MenuItems[] = [
  {
    id: 1,
    name: 'INICIO',
    disabled: false,
    active: true,
  },
  {
    id: 2,
    name: 'GALERIA',
    active: false,
    disabled: true,
    subMenuItems: [{ name: 'BOOK' }],
  },
  { id: 3, name: 'SERVICIOS', active: false, disabled: true },
  {
    id: 4,
    name: 'CONTACTO',
    active: false,
    disabled: false,
    href: 'https://wa.me/642954953',
  },
];
