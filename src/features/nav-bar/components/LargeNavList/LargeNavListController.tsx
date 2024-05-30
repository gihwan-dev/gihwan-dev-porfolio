'use client';

import LargeNavListContainerView from './LargeNavListContainerView';
import LargeNavListItemView from './LargeNavListItemView';
import useScroll from '~/hooks/useScroll';
import { NAV_LIST } from '~/consts/nav-list';

export default function LargeNavListController() {
  const { scrollToId } = useScroll();

  return (
    <LargeNavListContainerView>
      {NAV_LIST.map(item => {
        return (
          <LargeNavListItemView
            key={`LargeNavListItem-${item.href}`}
            item={item}
            onNavItemClick={scrollToId}
          />
        );
      })}
    </LargeNavListContainerView>
  );
}
