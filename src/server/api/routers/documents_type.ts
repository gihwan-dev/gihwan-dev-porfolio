import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';
import { db } from '~/server/db';

export const documentTypeRouter = createTRPCRouter({
  addNewType: protectedProcedure
    .input(
      z.object({
        type: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return db.document_Type.create({
        data: {
          document_type_name: input.type,
        },
      });
    }),
});
