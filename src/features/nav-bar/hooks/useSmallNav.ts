import { useState } from 'react';
import useScroll from '~/hooks/useScroll';

export default function useSmallNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const { scrollToId } = useScroll();

  const openNavBar = () => {
    setIsOpen(true);
  };

  const closeNavBar = () => {
    setIsOpen(false);
  };

  const navItemClickHandler = (id: string) => {
    scrollToId(id);
    setSelectedId(id);
    setIsOpen(false);
  };
  return {
    isOpen,
    selectedId,
    navItemClickHandler,
    openNavBar,
    closeNavBar,
  };
}
