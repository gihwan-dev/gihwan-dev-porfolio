import { z } from 'zod';

export const loginFormSchema = z.object({
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

export type LoginFormType = z.infer<typeof loginFormSchema>;
