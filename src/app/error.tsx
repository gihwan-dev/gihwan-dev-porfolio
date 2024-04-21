'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-main-background">
      <h2 className={'text-center text-3xl font-bold text-white'}>
        Something went wrong!
      </h2>
      <button
        className={
          'rounded-lg bg-text-primary-red px-4 py-3 font-bold text-white'
        }
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
