'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type ChangeEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card } from '~/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import {
  type CompleteEditFormType,
  completeEditFormSchema,
} from '~/types/document.types';

const CompleteEditForm = () => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const params = useParams();
  const id = params.id;

  // thumbnail, title, description, tag list 썸네일은 onChange 이벤트로
  const form = useForm<CompleteEditFormType>({
    resolver: zodResolver(completeEditFormSchema),
    defaultValues: {
      description: '',
      title: '',
    },
  });

  const onThumbnailChange: ChangeEventHandler<HTMLInputElement> = e => {
    const formData = new FormData();
    const image = e.target.files?.[0];

    if (!image) {
      window.alert('please upload thumbnail again');
      return;
    }

    formData.append('image-file', image);

    if (!id) {
      window.alert('bad request... try refresh...');
      return;
    }

    void fetch(`/api/image/${id as string}`, {
      method: 'POST',
      body: formData,
    })
      .then(res => {
        void res.json().then(data => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          setThumbnail(data?.link as string);
        });
      })
      .catch(error => console.error(error));
  };

  const onSubmit = (values: CompleteEditFormType) => {
    // TODO: title, description 저장
    console.log(values);
  };

  // TODO: 태그 리스트 추가 및 제거 작업 진행.
  // TODO: 새로운 태그 추가 가능해야함.
  // TODO: 현재 있는 태그 리스트들 보여주고 클릭해서 추가 / 제거
  return (
    <Card className="box-border flex w-full max-w-3xl flex-col gap-4 px-12 py-8">
      <div>
        <label htmlFor="thumbnail-image">
          {thumbnail ? (
            <div className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md border font-bold text-black">
              <Image
                src={thumbnail}
                alt="post thumbnail"
                fill={true}
                objectFit="cover"
              />
            </div>
          ) : (
            <div className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center rounded-md border font-bold text-black">
              upload your thumbnail for post
            </div>
          )}
        </label>
        <input
          onChange={onThumbnailChange}
          className="hidden"
          id="thumbnail-image"
          type="file"
          accept="image/*"
        />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title..." {...field} />
                </FormControl>
                <FormDescription>Enter your {"post's"} title.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="description..." {...field} />
                </FormControl>
                <FormDescription>
                  Enter your {"post's"} description.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Card className="flex flex-col gap-8 px-6 py-6">
        <div>
          <p className="text-sm font-bold">Tag list</p>
          <div>
            {/**
             * // TODO: 현재 포스트에 추가된 태그 리스트
             */}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">All tag list</p>
          <div>
            {/**
             * // TODO: 현재 내가 가지고 있는 태그 리스트 목록
             */}
          </div>
        </div>
      </Card>
    </Card>
  );
};

export default CompleteEditForm;
