'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

import { Suspense, useState } from 'react';
import { api } from '~/trpc/react';
import { Skeleton } from '~/components/ui/skeleton';
import Image from 'next/image';

interface Props {
  documentId: number;
}

const aspectValue = {
  mobile: 'aspect-mobile',
  desktop: 'aspect-desktop',
  tablet: 'aspect-tablet',
};

export default function PreviewScreenPhoto({ documentId }: Props) {
  const [tabs, setTabs] = useState<'mobile' | 'desktop' | 'tablet'>('mobile');

  const { data, isLoading, isError, error } =
    api.document.getDocumentScreenPhotos.useQuery({
      documentId: documentId,
      type: tabs,
    });

  if (isError) {
    throw error;
  }

  return (
    <div className="mx-auto my-8 w-full max-w-5xl px-6 xl:px-12">
      <h2 className={'my-12 text-2xl font-bold text-white'}>Screens</h2>
      <Tabs
        className={'flex w-full flex-col items-center justify-center'}
        value={tabs}
      >
        <TabsList>
          <TabsTrigger onClick={() => setTabs('mobile')} value={'mobile'}>
            Mobile
          </TabsTrigger>
          <TabsTrigger onClick={() => setTabs('tablet')} value={'tablet'}>
            Tablet
          </TabsTrigger>
          <TabsTrigger onClick={() => setTabs('desktop')} value={'desktop'}>
            Desktop
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className={'flex w-full flex-row gap-4 overflow-x-auto px-4 py-12'}
          value={tabs}
        >
          {isLoading ? (
            <div
              className={`mx-auto my-8 flex w-full max-w-5xl flex-row gap-4 px-4 py-12 xl:px-12`}
            >
              <Skeleton className={`w-[300] ${aspectValue[tabs]}`} />
              <Skeleton className={`w-[300] ${aspectValue[tabs]}`} />
              <Skeleton className={`w-[300] ${aspectValue[tabs]}`} />
            </div>
          ) : (
            data?.map(screenImage => (
              <Suspense
                key={`screen-${screenImage.screen_image_id}`}
                fallback={
                  <Skeleton className={`w-[300] ${aspectValue[tabs]}`} />
                }
              >
                <div
                  className={`${aspectValue[tabs]} relative w-[300] shrink-0`}
                >
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
      </Tabs>
    </div>
  );
}
