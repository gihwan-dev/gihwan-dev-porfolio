'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '~/components/ui/button';
import { api } from '~/trpc/react';

type Props = {
  documentId: string;
};

const PreviewDeleteButton: React.FC<Props> = ({ documentId }) => {
  const { mutate } = api.document.deleteOneDocument.useMutation();
  const router = useRouter();

  const onClick = () => {
    mutate(
      {
        documentId: +documentId,
      },
      {
        onSuccess: () => {
          router.back();
        },
      },
    );
  };

  return (
    <Button onClick={onClick} variant={'destructive'}>
      Delete
    </Button>
  );
};

export default PreviewDeleteButton;
