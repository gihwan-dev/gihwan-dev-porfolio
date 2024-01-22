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
import { loginFormSchema, type loginFormType } from '~/types/auth';

const LoginForm: React.FC = () => {
  const form = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (values: loginFormType) => {
    try {
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
