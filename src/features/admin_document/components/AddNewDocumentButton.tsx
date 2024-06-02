'use client';

import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';
import { api } from '~/trpc/react';
import { toast } from '~/components/ui/use-toast';

const AddNewDocumentButton = () => {
  const { mutate } = api.document.initializeContent.useMutation();
  const router = useRouter();

  const buttonHandler = () => {
    mutate(
      {},
      {
        onError: () => {
          toast({
            title: 'Failed... try again!',
          });
        },
        onSettled: () => {
          toast({
            title: 'Loading...',
          });
          return;
        },
        onSuccess: document => {
          if (!document) {
            toast({
              title: '에러가 발생했습니다. 다시 시도해 주세요.',
            });
            return;
          }
          router.push('/admin/documents/edit/' + document.document_id);
        },
      },
    );
  };

  return <Button onClick={buttonHandler}>Add</Button>;
};

export default AddNewDocumentButton;
