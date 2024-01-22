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

const formSchema = z.object({
  bio_img: z.string(),
  title: z.string(),
  description: z.string(),
  resume_link: z.string(),
  email: z.string().email(),
});

const BioForm: React.FC<{
  data: z.infer<typeof formSchema>;
}> = ({ data }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio_img: data.bio_img,
      description: data.bio_img,
      email: data.email,
      resume_link: data.resume_link,
      title: data.title,
    },
  });

  const submitHandler = (values: z.infer<typeof formSchema>) => {
    console.log(submitHandler);
  };

  /**
   * TODO: 아래 폼 인풋 작성
   *model Bio {
      bio_img         String
      title           String
      description     String
      resume_link     String
      email           String
    }
   */
  return (
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
              <FormDescription>Please Enter the email.</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};

export default BioForm;
