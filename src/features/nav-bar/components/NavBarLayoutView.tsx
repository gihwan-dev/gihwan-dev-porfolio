import { type ChildrenProps } from '~/types/props-types';

export default function NavBarLayoutView({ children }: ChildrenProps) {
  return <nav className="w-full  bg-main-foreground">{children}</nav>;
}
