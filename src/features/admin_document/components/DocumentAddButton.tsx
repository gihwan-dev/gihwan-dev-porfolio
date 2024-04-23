'use client';

import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';
import { useEditorStore } from '../stores/useEditorStore';
import { api } from '~/trpc/react';
import { toast } from '~/components/ui/use-toast';

const DocumentAddButton = () => {
  const { mutate } = api.document.initializeContent.useMutation();
  const router = useRouter();
  const { initializeState } = useEditorStore();

  const buttonHandler = () => {
    initializeState();

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

export default DocumentAddButton;
