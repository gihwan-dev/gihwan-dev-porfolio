'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const onClick = () => {
    router.push('/');
  };
  return (
    <div
      className={
        'flex h-screen w-screen flex-col items-center justify-center gap-4 bg-main-background'
      }
    >
      <h1 className={'text-center text-white'}>This page not founded.</h1>
      <button
        onClick={onClick}
        className={
          'rounded-lg bg-text-primary-red px-3 py-2 font-bold text-white'
        }
      >
        Return to homepage
      </button>
    </div>
  );
}
