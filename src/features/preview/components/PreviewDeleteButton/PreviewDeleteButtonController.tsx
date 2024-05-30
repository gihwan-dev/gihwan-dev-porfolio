'use client';

import { type DocumentIdProps } from '~/types/document-types';
import PreviewDeleteButtonView from './PreviewDeleteButtonView';
import useDeleteDocument from '../../hooks/useDeleteDocument';

export default function PreviewDeleteButtonController({
  documentId,
}: DocumentIdProps) {
  const { deleteDocument } = useDeleteDocument(documentId);
  return <PreviewDeleteButtonView onClick={deleteDocument} />;
}
