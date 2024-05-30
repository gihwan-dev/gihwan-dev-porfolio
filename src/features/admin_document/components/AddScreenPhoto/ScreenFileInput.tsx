import { chunk } from '~/utils/chunck-utils';
import { sleep } from '~/utils/promise-utils';
import { useState } from 'react';
import { addValuesToFormData } from '~/utils/form-utils';
import { Progress } from '~/components/ui/progress';

import { motion } from 'framer-motion';
import { fadeInFromLeft } from '~/utils/framer-motion-utils';
import { Loader } from 'lucide-react';

interface ScreenFileInputProps {
  documentId: number;
  type: 'mobile' | 'desktop' | 'tablet';
  refetch: () => void;
}

export default function ScreenFileInput({
  documentId,
  type,
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

  return (
    <label htmlFor={'add-new-screen'} className={'cursor-pointer'}>
      {openToast && (
        <motion.div
          className={
            'fixed bottom-10 right-10 z-20 flex flex-col gap-2 rounded-lg bg-white p-4 shadow-md'
          }
          {...fadeInFromLeft}
        >
          <Progress
            className={'w-80'}
            value={(successCount / filesLength) * 100}
          />
          <div
            className={'flex w-full flex-row items-center justify-end gap-4'}
          >
            <p className={'text-right text-xs font-medium'}>
              {successCount} / {filesLength} Uploaded
            </p>
            <Loader
              className={'animate-spin text-muted-foreground'}
              size={20}
            />
          </div>
        </motion.div>
      )}
      <div
        className={
          'flex h-[150px] w-[150px] flex-shrink-0 items-center justify-center bg-muted transition-all hover:opacity-70'
        }
      >
        <p className={'font-bold text-muted-foreground'}>+</p>
      </div>
      <input
        onChange={onChange}
        multiple
        type={'file'}
        id={'add-new-screen'}
        className={'hidden'}
      />
    </label>
  );
}
