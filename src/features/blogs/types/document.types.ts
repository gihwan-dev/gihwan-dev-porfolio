import { z } from 'zod';

export const completeEditFormSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type CompleteEditFormType = z.infer<typeof completeEditFormSchema>;
