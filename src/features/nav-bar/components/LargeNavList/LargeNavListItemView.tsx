import { type NavItem } from '~/types/nav-types';

interface LargeNavListItemProps {
  item: NavItem;
  onNavItemClick: (id: string) => void;
}

export default function LargeNavListItemView({
  item,
  onNavItemClick,
}: LargeNavListItemProps) {
  return (
    <button
      key={`${item.text}-nav-bar`}
      onClick={() => onNavItemClick(item.href)}
      className="cursor-pointer transition-all hover:text-text-primary-red"
    >
      {item.text.toUpperCase()}
    </button>
  );
}
