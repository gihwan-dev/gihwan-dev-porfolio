import { useState } from 'react';
import { chunk } from '~/utils/chunck-utils';
import { upLoadFiles } from '../services/uploadImageService';
import { sleep } from '~/utils/promise-utils';

import Compressor from 'compressorjs';

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

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setSuccessCount(0);
      setOpenToast(true);
      setIsSuccess(false);

      const files = e.target.files;

      if (!files) {
        throw new Error('No files found');
      }

      const compressedFiles: File[] = [];

      for (const file of files) {
        const newFiles = await new Promise((resolve, reject) => {
          new Compressor(file, {
            convertSize: 2000000,
            error: _ => {
              reject('Failed to compress image');
            },
            success: result => {
              if (result instanceof Blob) {
                const compressedFile = convertBlobToFile(result, file.name);
                resolve(compressedFile);
              } else {
                resolve(result);
              }
            },
          });
        });
        compressedFiles.push(newFiles as File);
      }

      setFilesLength(compressedFiles.length);

      const chunkedFiles = [...chunk(compressedFiles, 3)];

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

function convertBlobToFile(blob: Blob, fileName: string): File {
  return new File([blob], fileName, { type: blob.type });
}
