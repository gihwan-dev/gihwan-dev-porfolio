'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-main-background">
      <h1 className={'text-center text-3xl font-bold text-white'}>
        알 수 없는 에러가 발생했습니다!
      </h1>

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
