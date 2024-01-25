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
import { api } from '~/trpc/react';

const BottomNavBar = () => {
  const { data: typeList, isLoading } = api.document.getType.useQuery();
  if (isLoading) {
    return;
  }
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
          {typeList?.map(type => {
            return (
              <Link
                href={`/admin/documents?${type.document_type_name}`}
                key={`${type.document_type_id}-admin-bottom-nav`}
              >
                {type.document_type_name}
              </Link>
            );
          })}
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

export default BottomNavBar;
