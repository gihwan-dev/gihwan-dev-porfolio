'use client';

import { Button } from '~/components/ui/button';
import React from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  documentId: string;
};

const PreviewEditButton: React.FC<Props> = ({ documentId }) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/admin/documents/edit/' + documentId);
  };

  return <Button onClick={onClick}>Edit</Button>;
};

export default PreviewEditButton;
