import { Skeleton } from '~/components/ui/skeleton';

export default function PreviewTagListSuspenseFallback() {
  return (
    <Skeleton className="mx-auto h-12 w-full max-w-5xl px-4 py-8 text-white xl:px-12" />
  );
}
