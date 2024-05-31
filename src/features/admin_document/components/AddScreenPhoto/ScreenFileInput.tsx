import { Progress } from '~/components/ui/progress';

import { motion } from 'framer-motion';
import { fadeInFromLeft } from '~/utils/framer-motion-utils';
import { Loader } from 'lucide-react';
import useScreenPhoto from '~/features/admin_document/hooks/useScreenPhoto';

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
  const { openToast, successCount, filesLength, onChange } = useScreenPhoto({
    type,
    documentId,
    refetch,
  });

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
