import { Skeleton } from '~/components/ui/skeleton';

export default function PreviewContentSuspenseFallback() {
  return <Skeleton className="mx-auto h-screen w-full max-w-5xl xl:px-12" />;
}
