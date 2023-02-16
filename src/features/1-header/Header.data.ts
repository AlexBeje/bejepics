import { MenuItems } from './Header.type';

export const menuItems: MenuItems[] = [
  {
    active: false,
    disabled: true,
    id: 1,
    name: 'GALERIA',
    subMenuItems: [{ name: 'BOOK' }],
  },
  { active: false, disabled: true, id: 2, name: 'SERVICIOS' },
  {
    active: false,
    disabled: false,
    href: 'https://www.instagram.com/beje.pics/',
    id: 3,
    name: 'INSTAGRAM',
    openInNewWindow: true,
  },
  {
    active: false,
    disabled: false,
    href: 'https://wa.me/642954953',
    id: 4,
    name: 'CONTACTO',
    openInNewWindow: true,
  },
];
