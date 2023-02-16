export interface MenuItems {
  id: number;
  name: string;
  disabled: boolean;
  active: boolean;
  href?: string;
  openInNewWindow?: boolean
  subMenuItems?: [
    {
      name: string;
    }
  ];
}
