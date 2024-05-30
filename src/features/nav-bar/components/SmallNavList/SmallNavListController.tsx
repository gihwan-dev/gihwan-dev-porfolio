'use client';

import SmallNavHamburgerButtonView from './SmallNavHamburgerButtonView';
import SmallNavListContainerView from './SmallNavListContainerView';
import SmallNavListItemView from './SmallNavListItemView';

import { AnimatePresence } from 'framer-motion';

import { NAV_LIST } from '~/consts/nav-list';

import useSmallNav from '../../hooks/useSmallNav';

import Backdrop from '~/components/Backdrop';

export default function SmallNavListController() {
  const { openNavBar, closeNavBar, isOpen, navItemClickHandler, selectedId } =
    useSmallNav();

  return (
    <>
      <SmallNavHamburgerButtonView onClick={openNavBar} />
      <AnimatePresence>
        {isOpen && (
          <>
            <Backdrop onClick={closeNavBar} />
            <SmallNavListContainerView>
              {NAV_LIST.map(item => {
                return (
                  <SmallNavListItemView
                    key={`SmallNavListItem-${item.href}`}
                    item={item}
                    onClick={() => navItemClickHandler(item.href)}
                    selectedId={selectedId}
                  />
                );
              })}
            </SmallNavListContainerView>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
