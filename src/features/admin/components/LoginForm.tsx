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

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // TODO: 로그인 로직 구현 및 확인
      const response = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      if (!response || response.status === 401) {
        throw new Error(
          '아이디 또는 패스워드가 일치하지 않습니다. 다시 시도해 주세요.',
        );
      }
      router.refresh();
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        window.alert(error?.message);
      }
    }
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
