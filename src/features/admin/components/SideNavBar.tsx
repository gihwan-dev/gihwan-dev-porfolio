'use client';

import Link from 'next/link';
import { Button } from '~/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer';

const SideNavBar = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="fixed z-10 right-12 bottom-12" variant={'outline'}>
          Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Choose a menu</DrawerTitle>
          <DrawerDescription>Select menu for modifying.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-4 flex flex-col gap-4">
          <Link href="/admin/bio">Bio</Link>
          <Link href="/admin/blogs">Blogs</Link>
          <Link href="/admin/projects">Projects</Link>
        </div>
        <DrawerFooter className="pb-8">
          <DrawerClose asChild>
            <Button size={'lg'} variant={'outline'} color="var(--accent)">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SideNavBar;
