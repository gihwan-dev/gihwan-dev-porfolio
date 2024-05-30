import Link from 'next/link';
import React from 'react';
import { type DocumentIdProps } from '~/types/document-types';
import { Button } from '~/components/ui/button';

export default function PreviewEditButton({ documentId }: DocumentIdProps) {
  return (
    <Button>
      <Link href={`/admin/documents/edit/${documentId}`}>Edit</Link>
    </Button>
  );
}
