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
import AddDocumentTypeField from './AddDocumentTypeField';
import { Skeleton } from '~/components/ui/skeleton';

const BottomNavBar = () => {
  const { data: typeList, isLoading } = api.document.getAllType.useQuery();
  if (isLoading) {
    return (
      <Skeleton className="fixed bottom-12 right-12 z-10 h-[40px] w-[70.95px] rounded-lg" />
    );
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="fixed bottom-12 right-12 z-10" variant={'outline'}>
          Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Choose a menu</DrawerTitle>
          <DrawerDescription>Select menu for modifying.</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 px-4 py-4">
          <Link prefetch={true} href="/admin/bio">
            Bio
          </Link>
          {typeList?.map(type => {
            return (
              <Link
                prefetch={true}
                href={`/admin/documents?type=${type.document_type_name}`}
                key={`${type.document_type_id}-admin-bottom-nav`}
              >
                {type.document_type_name}
              </Link>
            );
          })}
          <Link className={'font-bold'} href={'/'}>
            Back to home
          </Link>
        </div>
        <DrawerFooter className="pb-8">
          <AddDocumentTypeField />
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
