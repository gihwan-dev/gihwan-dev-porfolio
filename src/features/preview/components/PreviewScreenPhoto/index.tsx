'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

import { Suspense, useState } from 'react';
import { api } from '~/trpc/react';
import { Skeleton } from '~/components/ui/skeleton';
import Image from 'next/image';

interface Props {
  documentId: number;
}

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

  if (isLoading) {
    return (
      <Skeleton className={'mx-auto my-8 h-40 w-full max-w-5xl xl:px-12'} />
    );
  }

  return (
    <div className="mx-auto my-8 w-full max-w-5xl px-6 xl:px-12">
      <h2 className={'my-8 text-2xl font-bold text-white'}>Screens</h2>
      <Tabs
        className={'flex w-full flex-col items-center justify-center gap-4'}
        value={tabs}
      >
        <TabsList className={'my-6'}>
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
          className={'flex w-full flex-row gap-2 overflow-x-auto'}
          value={tabs}
        >
          {data?.map(screenImage => (
            <Suspense
              key={`screen-${screenImage.screen_image_id}`}
              fallback={<Skeleton className={`w-300 aspect-${tabs}`} />}
            >
              <div className={`my-4 aspect-${tabs} relative w-[300] shrink-0`}>
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
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
