'use client';

import { Skeleton } from '~/components/ui/skeleton';
import { Suspense } from 'react';
import Image from 'next/image';
import { TabsContent } from '~/components/ui/tabs';
import { api } from '~/trpc/react';

interface Props {
  documentId: number;
}

export default function ScreenMobileContent({ documentId }: Props) {
  const { data, isLoading, isError, error } =
    api.document.getDocumentScreenPhotos.useQuery({
      documentId: documentId,
      type: 'mobile',
    });

  if (isError) {
    throw error;
  }

  let content = null;

  if (!isLoading && (data?.length === 0 || !data)) {
    content = (
      <div
        className={
          'mt-8 flex h-full w-full items-center justify-center font-bold text-white'
        }
      >
        <p>등록된 이미지가 없습니다!</p>
      </div>
    );
  }

  return (
    <TabsContent
      className={'flex h-full w-full flex-row overflow-x-auto'}
      value={'mobile'}
    >
      {content}
      {isLoading ? (
        <div className={`mx-auto flex w-full max-w-5xl flex-row gap-4`}>
          <Skeleton className={`aspect-mobile w-[300px]`} />
          <Skeleton className={`aspect-mobile w-[300px]`} />
          <Skeleton className={`aspect-mobile w-[300px]`} />
        </div>
      ) : (
        data?.map(screenImage => (
          <Suspense
            key={`screen-${screenImage.screen_image_id}`}
            fallback={<Skeleton className={`aspect-mobile w-[300px]`} />}
          >
            <div className={`aspect-mobile relative w-[300px] shrink-0`}>
              <Image
                src={screenImage.url}
                alt={`screen-${screenImage.screen_image_id}`}
                fill
                loading={'lazy'}
                priority={false}
                sizes={'300px'}
                className={'z-20 object-contain'}
              />
            </div>
          </Suspense>
        ))
      )}
    </TabsContent>
  );
}
