import { addValuesToFormData } from '~/utils/form-utils';
import { sleep } from '~/utils/promise-utils';

interface UploadFilesParams {
  type: 'mobile' | 'desktop' | 'tablet';
  documentId: number;
  chunkedFileList: File[];
  callback: () => void;
}

export const upLoadFiles = async ({
  type,
  documentId,
  chunkedFileList,
  callback,
}: UploadFilesParams) => {
  const newFormData = new FormData();

  newFormData.append('type', type);
  newFormData.append('documentId', documentId.toString());

  addValuesToFormData(newFormData, chunkedFileList);

  await sleep(3000);

  const response = await fetch(`/api/image/${documentId}/screen`, {
    method: 'POST',
    body: newFormData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload images');
  }

  callback();
};
