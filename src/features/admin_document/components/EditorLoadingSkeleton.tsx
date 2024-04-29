import { Skeleton } from '~/components/ui/skeleton';

const EditorLoadingSkeleton = () => {
  return (
    <>
      <div className={'flex h-full w-full flex-row gap-2 p-2'}>
        <Skeleton className={'h-full w-full'} />
        <Skeleton className={'h-full w-full'} />
      </div>
      <div className="flex w-full flex-row justify-center gap-6">
        <Skeleton className={'h-[40px] w-[68.35px]'} />
        <Skeleton className={'h-[40px] w-[63.98px]'} />
      </div>
    </>
  );
};

export default EditorLoadingSkeleton;
