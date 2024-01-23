import Link from 'next/link';
import MainLogo from '~/assets/svgs/MainLogo';

const NAV_LIST = [
  { text: 'about me', href: '#about-me' },
  { text: 'blogs', href: '#blogs' },
  { text: 'projects', href: '#projects' },
  { text: 'skills', href: '#skills' },
  { text: 'contact', href: '#contact' },
];

const MainNav = () => {
  return (
    <nav className="w-full bg-main-foreground">
      <div>
        <MainLogo />
        <ul>
          {NAV_LIST.map(item => {
            return (
              <Link key={`${item.text}-nav-bar`} href={item.href}>
                {item.text}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
