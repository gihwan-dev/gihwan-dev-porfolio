import { getAllTag } from '~/server/query/tag.utils';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';
import { z } from 'zod';
import { db } from '~/server/db';

export const tagRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return await getAllTag();
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

      return await db.document_Tags.create({
        data: {
          name: input.name,
          background_color: input.backgroundColor,
          text_color: input.textColor,
          document_type: {
            connect: {
              document_type_name: type?.document_type.document_type_name,
            },
          },
          category: {
            connectOrCreate: {
              create: {
                name: input.category,
              },
              where: {
                name: input.category,
              },
            },
          },
        },
      });
    }),

  getDocumentTags: publicProcedure
    .input(
      z.object({
        documentId: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return await db.document_Tags.findMany({
        where: {
          Documents: {
            some: {
              document_id: input.documentId,
            },
          },
        },
      });
    }),
});
