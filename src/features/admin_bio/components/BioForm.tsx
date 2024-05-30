'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
import { toast } from '~/components/ui/use-toast';

const bioFormSchema = z.object({
  bio_img: z.string(),
  title: z.string(),
  description: z.string(),
  resume_link: z.string(),
  email: z.string().email(),
});

type UpdateBioType = z.infer<typeof bioFormSchema>;

const BioForm: React.FC<{
  data: z.infer<typeof bioFormSchema> | null;
}> = ({ data }) => {
  const form = useForm<UpdateBioType>({
    resolver: zodResolver(bioFormSchema),
    defaultValues: {
      bio_img: data?.bio_img ?? '',
      description: data?.description ?? '',
      email: data?.email ?? '',
      resume_link: data?.resume_link ?? '',
      title: data?.title ?? '',
    },
  });

  const { mutate } = api.bio.createBio.useMutation();

  const submitHandler = (values: UpdateBioType) => {
    toast({
      title: 'Upload in progress...',
    });
    mutate(values, {
      onSuccess: _ => {
        toast({
          title: 'Upload successful!',
          className: 'bg-green-500 text-white',
        });
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
                <FormLabel className={'text-white'}>title</FormLabel>
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
                <FormLabel className={'text-white'}>description</FormLabel>
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
                <FormLabel className={'text-white'}>email</FormLabel>
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
                <FormLabel className={'text-white'}>resume</FormLabel>
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
                <FormLabel className={'text-white'}>image</FormLabel>
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
