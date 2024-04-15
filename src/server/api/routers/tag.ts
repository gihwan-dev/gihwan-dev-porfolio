import { createOneTag, getAllTag } from '~/server/query/tag';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';
import { z } from 'zod';
import { db } from '~/server/db';

export const tagRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return getAllTag();
  }),

  createOne: protectedProcedure
    .input(
      z.object({
        documentId: z.number(),
        name: z.string(),
        category: z.string(),
        backgroundColor: z.string(),
        textColor: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const type = await db.documents.findUnique({
        where: {
          document_id: input.documentId,
        },
        include: {
          document_type: true,
        },
      });

      if (!type) {
        throw Error('No document type');
      }

      return await createOneTag({ ...input, type: type.document_type });
    }),
});
