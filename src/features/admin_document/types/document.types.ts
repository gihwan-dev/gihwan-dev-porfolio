import { z } from 'zod';

export const completeEditFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  documentTypeName: z.string(),
});

export type CompleteEditFormType = z.infer<typeof completeEditFormSchema>;
