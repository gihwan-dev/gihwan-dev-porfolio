/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  addTagToDocument,
  countAll,
  createContent,
  deleteOneDocument,
  getAllDocument,
  getAllDocumentByPage,
  getDocumentTags,
  getDocumentType,
  getOneDocument,
  getTypedDocument,
  saveProjectInfo,
  updateContent,
} from '~/server/query/document';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';
import { z } from 'zod';

export const documentRouter = createTRPCRouter({
  getAllDocument: publicProcedure.query(async () => {
    return getAllDocument();
  }),

  getAllType: publicProcedure.query(async () => {
    return getDocumentType();
  }),

  getAllDocumentByPage: publicProcedure
    .input(
      z.object({
        page: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return getAllDocumentByPage(input.page);
    }),

  getTypedDocument: publicProcedure
    .input(
      z.object({
        page: z.number(),
        type: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return getTypedDocument(input.page, input.type);
    }),

  countAll: publicProcedure.query(async () => {
    return countAll();
  }),

  saveContent: protectedProcedure
    .input(
      z.object({
        model: z.string(),
        type: z.string().nullable(),
        documentId: z.number().nullable(),
      }),
    )
    .mutation(async ({ input }) => {
      const { model, type, documentId } = input;

      if (documentId) {
        return await updateContent({ model, documentId });
      }

      if (!type) {
        return null;
      }

      return await createContent(model, type);
    }),

  addTag: protectedProcedure
    .input(
      z.object({
        tagId: z.number(),
        documentId: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      return await addTagToDocument(input);
    }),

  getCurrentTags: publicProcedure
    .input(
      z.object({
        documentId: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return getDocumentTags(input.documentId);
    }),

  saveInfo: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        documentId: z.number(),
        startDate: z.string(),
        endDate: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return saveProjectInfo(input);
    }),

  getOneDocument: publicProcedure
    .input(
      z.object({
        documentId: z.number().nullable(),
      }),
    )
    .query(async ({ input }) => {
      if (!input.documentId) {
        return null;
      }
      return getOneDocument(input.documentId);
    }),

  deleteOneDocument: protectedProcedure
    .input(
      z.object({
        documentId: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      return deleteOneDocument(input.documentId);
    }),
});
