import { useState } from 'react';
import { chunk } from '~/utils/chunck-utils';
import { upLoadFiles } from '~/features/admin_document/services/uploadImageService';
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
  const [isSuccess, setIsSuccess] = useState(false);

  // TODO: Promise all로 동시적으로 처리하기

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setSuccessCount(0);
      setOpenToast(true);
      setIsSuccess(false);

      const files = e.target.files;

      if (!files) {
        throw new Error('No files found');
      }

      setFilesLength(files.length);

      const chunkedFiles = [...chunk(files, 5)];

      const promises = chunkedFiles.map(chunkedFileList =>
        upLoadFiles({
          chunkedFileList,
          type,
          documentId,
          callback: () =>
            setSuccessCount(prev => prev + chunkedFileList.length),
        }),
      );

      await Promise.all(promises);
      // state 변경 후 렌더링 반영되기 위해 0.5초 기다리기
      await sleep(500);

      // 성공 상태로 변경하고 UI로 보여준 후 1초후에 사라지게 함
      setIsSuccess(true);

      await sleep(1000);

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
    isSuccess,
  };
}
