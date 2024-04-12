'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
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
  completeEditFormSchema,
  type CompleteEditFormType,
} from '~/features/blogs/types/document.types';
import ThumbnailInput from './ThumbnailInput';
import TagListContainer from './TagListContainer';
import { Button } from '~/components/ui/button';
import { api } from '~/trpc/react';

const CompleteEditForm = () => {
  const params = useParams();
  const id = params.id ?? '1';
  const searchParams = useSearchParams();
  const type = searchParams.get('type') ?? 'Project';

  const router = useRouter();

  const { mutate } = api.document.saveInfo.useMutation();

  // thumbnail, title, description, tag list 썸네일은 onChange 이벤트로
  const form = useForm<CompleteEditFormType>({
    resolver: zodResolver(completeEditFormSchema),
    defaultValues: {
      description: '',
      title: '',
    },
  });

  const onSubmit = (values: CompleteEditFormType) => {
    mutate({
      title: values.title,
      description: values.description,
      documentId: Number(id as string),
    });

    router.push(`/admin/documents/?page=1&type=${type}`);
  };

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
          <Button type="submit" variant={'default'} className="w-full">
            Save
          </Button>
        </form>
      </Form>
      <TagListContainer />
    </Card>
  );
};

export default CompleteEditForm;
