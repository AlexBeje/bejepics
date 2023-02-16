export interface MenuItems {
  id: number;
  name: string;
  disabled: boolean;
  active: boolean;
  href?: string;
  subMenuItems?: [
    {
      name: string;
    }
  ];
}
