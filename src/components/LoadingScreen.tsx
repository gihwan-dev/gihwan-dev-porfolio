'use client';

export default function LoadingScreen() {
  return (
    <div
      className={
        'fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-foreground'
      }
    >
      <h1 className={'animate-bounce text-center text-4xl text-white'}>
        안녕하세요! 프론트엔드 개발자 최기환 입니다!
      </h1>
    </div>
  );
}
