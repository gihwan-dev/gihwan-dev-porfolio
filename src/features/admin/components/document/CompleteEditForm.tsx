'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
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
import ThumbnailInput from './ThumbnailInput';
import TagListContainer from './TagListContainer';

const CompleteEditForm = () => {
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

  const onSubmit = (values: CompleteEditFormType) => {
    // TODO: title, description 저장
    console.log(values);
  };

  // TODO: 태그 리스트 추가 및 제거 작업 진행.
  // TODO: 새로운 태그 추가 가능해야함.
  // TODO: 현재 있는 태그 리스트들 보여주고 클릭해서 추가 / 제거
  return (
    <Card className="box-border flex w-full max-w-3xl flex-col gap-4 px-12 py-8">
      <ThumbnailInput />
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
      <TagListContainer />
    </Card>
  );
};

export default CompleteEditForm;
