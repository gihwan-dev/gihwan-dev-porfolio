import { Skeleton } from '~/components/ui/skeleton';

export default function PreviewThumbnailSuspenseFallback() {
  return (
    <Skeleton className="mx-auto my-10 aspect-video w-full max-w-7xl overflow-hidden xl:rounded-md" />
  );
}
