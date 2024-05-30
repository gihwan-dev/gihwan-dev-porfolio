import { type ChildrenProps } from '~/types/props-types';

export default function LargeNavListContainerView({ children }: ChildrenProps) {
  return (
    <ul className="flex flex-row items-center gap-7 text-base font-bold tracking-widest text-white">
      {children}
    </ul>
  );
}
