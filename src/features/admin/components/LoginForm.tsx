'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '~/components/ui/button';
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

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(2, {
      message: 'Password at least 2 length',
    })
    .max(12, {
      message: 'Maximum length is 12',
    }),
});

const LoginForm: React.FC = () => {
  // TODO: 로그인 폼 구현
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="please enter the email..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                email should be valid email form.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="please enter the password..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                password length should be min 5 max 12
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
