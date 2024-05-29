import { put } from '@vercel/blob';
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
  const uploadPromises = fileList.map(file =>
    put(`screen-${documentId}-${file.name}`, file, { access: 'public' }),
  );
  const urls = await Promise.all(uploadPromises);

  const screenImages = urls.map(url => ({
    url: url.url,
    document_id: documentId,
    type,
  }));

  return db.screen_Image.createMany({
    data: screenImages,
  });
};
