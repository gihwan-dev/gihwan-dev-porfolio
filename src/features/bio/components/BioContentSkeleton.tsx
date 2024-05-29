import { Skeleton } from '~/components/ui/skeleton';

export default function BioContentSkeleton() {
  return (
    <div className={'flex w-1/3 flex-col items-center justify-center'}>
      <Skeleton className={'mb-12 h-40 w-full'} />
      <Skeleton className={'mb-3 h-12 w-full'} />
      <Skeleton className={'h-8 w-1/2'} />
    </div>
  );
}
