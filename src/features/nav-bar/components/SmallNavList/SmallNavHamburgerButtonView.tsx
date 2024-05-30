import MenuIcon from '~/assets/svgs/MenuIcon';

interface SmallNavHamburgerButtonProps {
  onClick: () => void;
}

export default function SmallNavHamburgerButtonView({
  ...props
}: SmallNavHamburgerButtonProps) {
  return (
    <button {...props}>
      <MenuIcon />
    </button>
  );
}
