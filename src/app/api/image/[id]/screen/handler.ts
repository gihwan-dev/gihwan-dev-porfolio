import { del, list, put } from '@vercel/blob';
import { db } from '~/server/db';

interface SaveScreenPhotoParams {
  fileList: File[];
  documentId: number;
  type: 'mobile' | 'desktop' | 'tablet';
}

export const createDocumentScreenPhotos = async ({
  fileList,
  documentId,
  type,
}: SaveScreenPhotoParams) => {
  const urlLists = await list({
    prefix: `screen-${documentId}-${type}`,
  });

  if (urlLists.blobs.length > 0) {
    await del(urlLists.blobs.map(blob => blob.url));
  }

  const uploadPromises = fileList.map(file =>
    put(`screen-${documentId}-${file.name}`, file, { access: 'public' }),
  );
  const urls = await Promise.all(uploadPromises);

  const screenImages = urls.map(url => ({
    url: url.url,
    document_id: documentId,
    type,
  }));

  await db.screen_Image.deleteMany({
    where: {
      document_id: documentId,
    },
  });

  return db.screen_Image.createMany({
    data: screenImages,
  });
};
