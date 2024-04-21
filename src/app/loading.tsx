import '~/styles/globals.css';

export default function Loading() {
  return (
    <div
      className={
        'flex h-screen w-screen flex-col items-center justify-center bg-main-background text-4xl text-white'
      }
    >
      <h1 className={'w-2/3 text-center animate-in'}>
        안녕하세요! 프론트엔드 개발자 최기환 입니다!
      </h1>
    </div>
  );
}
