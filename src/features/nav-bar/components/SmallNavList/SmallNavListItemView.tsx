import { type NavItem } from '~/types/nav-types';

interface SmallNavListItemProps {
  selectedId: string;
  item: NavItem;
  onClick: () => void;
}

export default function SmallNavListItemView({
  selectedId,
  item,
  ...props
}: SmallNavListItemProps) {
  return (
    <button
      className={`${selectedId === item.href ? 'text-text-primary-red' : 'text'}`}
      {...props}
      key={`${item.text}-small-nav-bar`}
    >
      {item.text.toUpperCase()}
    </button>
  );
}
