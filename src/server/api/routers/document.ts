/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  countAll,
  createContent,
  getAllDocument,
  getDocumentType,
} from '~/server/utils/document';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';
import { z } from 'zod';
import { put } from '@vercel/blob';
import { db } from '~/server/db';

export const documentRouter = createTRPCRouter({
  getAllType: publicProcedure.query(async () => {
    return await getDocumentType();
  }),

  getAllDocument: publicProcedure
    .input(
      z.object({
        page: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return await getAllDocument(input.page);
    }),

  countAll: publicProcedure.query(async () => {
    return await countAll();
  }),

  saveContent: protectedProcedure
    .input(
      z.object({
        model: z.string(),
        type: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { model, type } = input;
      const result = await createContent(model, type);
      return result;
    }),
});
