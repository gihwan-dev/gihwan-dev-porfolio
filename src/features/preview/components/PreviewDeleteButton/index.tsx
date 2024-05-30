import PreviewDeleteButtonController from './PreviewDeleteButtonController';
import { type DocumentIdProps } from '~/types/document-types';

export default function PreviewDeleteButton({ documentId }: DocumentIdProps) {
  return <PreviewDeleteButtonController documentId={documentId} />;
}
