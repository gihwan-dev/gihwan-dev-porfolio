import { getAllTag } from '~/server/utils/tag.utils';
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
        name: z.string(),
        category: z.string(),
        backgroundColor: z.string(),
        textColor: z.string(),
        type: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return await db.document_Tags.create({
        data: {
          name: input.name,
          background_color: input.backgroundColor,
          text_color: input.textColor,
          document_type: {
            connect: {
              document_type_name: input.type,
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
});
