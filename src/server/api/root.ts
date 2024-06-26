import { createTRPCRouter } from '~/server/api/trpc';
import { bioRouter } from './routers/bio';
import { tagRouter } from './routers/tag';
import { documentRouter } from './routers/document';
import { documentTypeRouter } from './routers/documents_type';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  bio: bioRouter,
  tag: tagRouter,
  document: documentRouter,
  documentType: documentTypeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
