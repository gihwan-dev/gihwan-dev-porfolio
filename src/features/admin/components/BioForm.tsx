'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { api } from '~/trpc/react';
import { bioFormSchema, type updateBioType } from '~/features/blogs/types/bio';

const BioForm: React.FC<{
  data: z.infer<typeof bioFormSchema> | null;
}> = ({ data }) => {
  const form = useForm<updateBioType>({
    resolver: zodResolver(bioFormSchema),
    defaultValues: {
      bio_img: data?.bio_img ?? '',
      description: data?.bio_img ?? '',
      email: data?.email ?? '',
      resume_link: data?.resume_link ?? '',
      title: data?.title ?? '',
    },
  });

  const { mutate } = api.bio.createBio.useMutation();

  const submitHandler = (values: updateBioType) => {
    mutate(values, {
      onSuccess: data => {
        window.alert(data.message);
      },
    });
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter title" {...field} />
                </FormControl>
                <FormDescription>Please Enter the title.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter description" {...field} />
                </FormControl>
                <FormDescription>Please Enter the description.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormDescription>Please Enter the email.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resume_link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>resume</FormLabel>
                <FormControl>
                  <Input placeholder="Enter resume" {...field} />
                </FormControl>
                <FormDescription>Please Enter the resume.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio_img"
            render={({ field }) => (
              <FormItem>
                <FormLabel>image</FormLabel>
                <FormControl>
                  <Input placeholder="Enter image" {...field} />
                </FormControl>
                <FormDescription>Please Enter the image.</FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default BioForm;
