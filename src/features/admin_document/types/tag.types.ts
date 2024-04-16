import { z } from 'zod';

export const addNewTagSchema = z.object({
  name: z.string(),
  backgroundColor: z.string(),
  textColor: z.string(),
  category: z.string(),
});

export type AddNewTagType = z.infer<typeof addNewTagSchema>;
