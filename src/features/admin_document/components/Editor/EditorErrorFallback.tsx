'use client';

import { type FC } from 'react';
import { toast } from '~/components/ui/use-toast';

interface Props {
  model: string;
}

const EditorErrorFallback: FC<Props> = ({ model }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(model);
    toast({
      title: 'Save in clipboard.',
    });
  };
  return (
    <div className={'box-border w-full rounded-xl bg-white px-8 py-8'}>
      <button
        onClick={handleCopy}
        className={
          'absolute right-8 z-10 rounded-md border-none bg-gray-200 px-3 py-2 font-bold'
        }
      >
        copy
      </button>
      <h2 className={'pb-8 text-center text-xl text-red-500'}>
        Error...! save content to your clipboard and try refresh.
      </h2>
      <pre
        className={
          'relative space-y-4 rounded-md border border-gray-300 px-4 py-8'
        }
      >
        {model}
      </pre>
    </div>
  );
};

export default EditorErrorFallback;
