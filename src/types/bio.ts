import { z } from 'zod';

export const bioFormSchema = z.object({
  bio_img: z.string(),
  title: z.string(),
  description: z.string(),
  resume_link: z.string(),
  email: z.string().email(),
});

export type updateBioType = z.infer<typeof bioFormSchema>;
