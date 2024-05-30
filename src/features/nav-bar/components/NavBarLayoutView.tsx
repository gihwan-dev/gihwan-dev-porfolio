import { type ChildrenProps } from '~/types/props-types';

export default function NavBarLayoutView({ children }: ChildrenProps) {
  return (
    <nav className="fixed left-0 top-0 z-40 w-full  bg-main-foreground">
      {children}
    </nav>
  );
}
