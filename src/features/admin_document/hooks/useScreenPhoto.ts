import { useState } from 'react';
import { chunk } from '~/utils/chunck-utils';
import { addValuesToFormData } from '~/utils/form-utils';
import { sleep } from '~/utils/promise-utils';

interface ScreenFileInputProps {
  documentId: number;
  type: 'mobile' | 'desktop' | 'tablet';
  refetch: () => void;
}

export default function useScreenPhoto({
  type,
  documentId,
  refetch,
}: ScreenFileInputProps) {
  const [openToast, setOpenToast] = useState(false);
  const [filesLength, setFilesLength] = useState(0);
  const [successCount, setSuccessCount] = useState(0);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setSuccessCount(0);
      setOpenToast(true);

      const files = e.target.files;

      if (!files) {
        throw new Error('No files found');
      }

      setFilesLength(files.length);

      const chunkedFiles = [...chunk(files, 5)];

      for (const chunkedFileList of chunkedFiles) {
        const newFormData = new FormData();

        newFormData.append('type', type);
        newFormData.append('documentId', documentId.toString());

        addValuesToFormData(newFormData, chunkedFileList);

        console.log('upload new data...', chunkedFiles.length);

        await sleep(3000);

        setSuccessCount(prev => prev + chunkedFileList.length);

        const response = await fetch(`/api/image/${documentId}/screen`, {
          method: 'POST',
          body: newFormData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload images');
        }
      }
      setOpenToast(false);
      refetch();
    } catch (e) {
      window.alert('Failed to upload images');
    }
  };

  return {
    onChange,
    openToast,
    successCount,
    filesLength,
  };
}
