'use client';

import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { api } from '~/trpc/react';
import { Skeleton } from '~/components/ui/skeleton';
import Image from 'next/image';
import ScreenFileInput from './ScreenFileInput';
import { DeleteIcon } from 'lucide-react';
import { toast } from '~/components/ui/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { getQueryKey } from '@trpc/react-query';

interface Props {
  documentId: number;
}

export default function AddScreenPhoto({ documentId }: Props) {
  const [tab, setTab] = useState<'mobile' | 'desktop' | 'tablet'>('mobile');

  const queryClient = useQueryClient();

  const { data, isLoading, refetch, isError, error } =
    api.document.getDocumentScreenPhotos.useQuery({
      type: tab,
      documentId: documentId,
    });

  const { mutate } = api.document.deleteDocumentScreenPhoto.useMutation();

  const deletePhoto = (screenImageId: number) => {
    mutate(
      { screenPhotoId: screenImageId },
      {
        onSuccess: () => {
          toast({
            title: 'Screen photo deleted successfully',
          });
          void refetch();
          queryClient.setQueryData(
            getQueryKey(api.document.getDocumentScreenPhotos, {
              type: tab,
              documentId: documentId,
            }),
            () =>
              data?.filter(photo => photo.screen_image_id !== screenImageId),
          );
        },
        onError: () => {
          toast({
            title: 'Screen photo delete failed',
          });
        },
      },
    );
  };

  if (isError) {
    throw error;
  }

  if (isLoading) {
    return <Skeleton className={'h-32 w-full'} />;
  }

  return (
    <Card>
      <CardHeader className={'text-sm'}>Add Screen Photo.</CardHeader>
      <CardContent>
        <Tabs value={tab}>
          <TabsList className={'w-full'}>
            <TabsTrigger value={'mobile'} onClick={() => setTab('mobile')}>
              Mobile
            </TabsTrigger>
            <TabsTrigger value={'desktop'} onClick={() => setTab('desktop')}>
              Desktop
            </TabsTrigger>
            <TabsTrigger value={'tablet'} onClick={() => setTab('tablet')}>
              Tablet
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className={'flex w-full flex-row gap-2  overflow-x-auto'}
            value={tab}
          >
            {data
              ?.filter(photo => photo.type === tab)
              .map(photo => (
                <div
                  key={`screen-photo-image-${photo.screen_image_id}`}
                  className={'relative h-[150] w-[150] border'}
                >
                  <button
                    type={'button'}
                    onClick={() => deletePhoto(photo.screen_image_id)}
                    className={
                      'absolute right-0 top-0 z-20 mr-1 text-destructive transition-all hover:opacity-60'
                    }
                  >
                    <DeleteIcon />
                  </button>
                  <Image
                    src={photo.url}
                    fill
                    className={'object-contain'}
                    alt={`screen-photo-image-${photo.screen_image_id}`}
                  />
                </div>
              ))}
            <ScreenFileInput
              documentId={documentId}
              type={tab}
              refetch={refetch}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
