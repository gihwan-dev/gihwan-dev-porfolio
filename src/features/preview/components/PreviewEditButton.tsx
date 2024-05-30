import Link from 'next/link';
import React from 'react';
import { type DocumentIdProps } from '~/types/document-types';

export default function PreviewEditButton({ documentId }: DocumentIdProps) {
  return <Link href={`/admin/documents/edit/${documentId}`}>Edit</Link>;
}
