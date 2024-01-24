import Link from 'next/link';
import { type FC } from 'react';

const LargeNavList: FC<{
  navList: { text: string; href: string }[];
}> = ({ navList }) => {
  return (
    <ul className="text-white font-bold text-base flex flex-row items-center gap-7 tracking-widest">
      {navList.map(item => {
        return (
          <Link
            key={`${item.text}-nav-bar`}
            href={item.href}
            className="hover:text-text-primary-red transition-all cursor-pointer"
          >
            {item.text.toUpperCase()}
          </Link>
        );
      })}
    </ul>
  );
};

export default LargeNavList;
