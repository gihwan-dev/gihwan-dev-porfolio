'use client';

import { type DocumentIdProps } from '~/types/document-types';
import PreviewDeleteButton from './PreviewDeleteButton';
import useDeleteDocument from '../../hooks/useDeleteDocument';

export default function PreviewDeleteButtonController({
  documentId,
}: DocumentIdProps) {
  const { deleteDocument } = useDeleteDocument(documentId);
  return <PreviewDeleteButton onClick={deleteDocument} />;
}
