/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  countAll,
  createContent,
  getAllDocument,
  getDocumentType,
  getTypedDocument,
} from '~/server/query/document';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';
import { z } from 'zod';
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

  getTypedDocument: publicProcedure
    .input(
      z.object({
        page: z.number(),
        type: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return await getTypedDocument(input.page, input.type);
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

  addTag: protectedProcedure
    .input(
      z.object({
        tagId: z.number(),
        documentId: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      return await db.documents.update({
        where: {
          document_id: input.documentId,
        },
        data: {
          project_tags: {
            connect: {
              document_tag_id: input.tagId,
            },
          },
        },
      });
    }),

  getCurrentTags: publicProcedure
    .input(
      z.object({
        documentId: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return await db.documents.findUnique({
        where: {
          document_id: input.documentId,
        },
        select: {
          project_tags: true,
        },
      });
    }),

  saveInfo: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        documentId: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      return db.documents.update({
        where: {
          document_id: input.documentId,
        },
        data: {
          title: input.title,
          description: input.description,
        },
      });
    }),

  getOneDocument: publicProcedure
    .input(
      z.object({
        documentId: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return await db.documents.findUnique({
        where: {
          document_id: input.documentId,
        },
        include: {
          project_tags: true,
        },
      });
    }),
});
