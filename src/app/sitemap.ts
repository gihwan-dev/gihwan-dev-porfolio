import { type MetadataRoute } from 'next';
import { db } from '~/server/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const documents = await db.documents.findMany();
  return [
    {
      url: 'https://portfolio.gihwan-dev.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://portfolio.gihwan-dev.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...documents.map(doc => ({
      url: `https://portfolio.gihwan-dev.com/projects/${doc.document_id}`,
      lastModified: doc.reg_date,
    })),
  ];
}
