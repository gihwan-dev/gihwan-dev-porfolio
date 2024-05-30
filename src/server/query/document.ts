import { db } from '../db';
import { del } from '@vercel/blob';

import { type DocumentIdProps } from '~/types/document-types';

export const getAllDocument = async () => {
  return db.documents.findMany({
    include: {
      project_tags: true,
    },
    where: {
      document_type: {
        document_type_name: 'Project',
      },
    },
    orderBy: {
      end_date: 'desc',
    },
  });
};

export const getDocumentType = async () => {
  return db.document_Type.findMany();
};

export const getAllDocumentByPage = async (page: number) => {
  return db.documents.findMany({
    orderBy: {
      end_date: 'desc',
    },
    take: 10,
    skip: (page - 1) * 10,
  });
};

export const getTypedDocument = (page: number, type: string) => {
  return db.documents.findMany({
    orderBy: {
      end_date: 'desc',
    },
    skip: (page - 1) * 10,
    take: 10,
    where: {
      document_type: {
        document_type_name: type,
      },
    },
  });
};

export const countAll = () => {
  return db.documents.count();
};

export const initializeContent = async () => {
  return db.documents.create({
    data: {
      content: '',
      description: '',
      thumbnail: '',
      title: '',
      document_type: {
        connectOrCreate: {
          create: {
            document_type_name: 'Temp',
          },
          where: {
            document_type_name: 'Temp',
          },
        },
      },
    },
  });
};

interface UpdateContent {
  model: string;
  documentId: number;
}
export const updateContent = async ({ model, documentId }: UpdateContent) => {
  return db.documents.update({
    where: {
      document_id: documentId,
    },
    data: {
      content: model,
    },
  });
};

interface AddTagParams {
  documentId: number;
  tagId: number;
}

export const addTagToDocument = async ({ documentId, tagId }: AddTagParams) => {
  return db.documents.update({
    where: {
      document_id: documentId,
    },
    data: {
      project_tags: {
        connect: {
          document_tag_id: tagId,
        },
      },
    },
  });
};

export const getDocumentTags = async (documentId: number) => {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    select: {
      project_tags: true,
    },
  });
};

interface SaveContentProps {
  documentId: number;
  content: string;
}

export const saveContent = ({ documentId, content }: SaveContentProps) => {
  return db.documents.update({
    where: {
      document_id: documentId,
    },
    data: {
      content,
    },
  });
};

interface SaveProjectInfoParams {
  documentId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  documentTypeName: string;
}

export const saveProjectInfo = ({
  title,
  description,
  documentId,
  startDate,
  endDate,
  documentTypeName,
}: SaveProjectInfoParams) => {
  return db.documents.update({
    where: {
      document_id: documentId,
    },
    include: {
      document_type: true,
    },
    data: {
      title: title,
      description: description,
      start_date: new Date(startDate),
      end_date: new Date(endDate),
      document_type: {
        connect: {
          document_type_name: documentTypeName,
        },
      },
    },
  });
};

export const getOneDocument = (documentId: number) => {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    include: {
      project_tags: true,
      document_type: true,
    },
  });
};

export const deleteOneDocument = (documentId: number) => {
  return db.documents.delete({
    where: {
      document_id: documentId,
    },
  });
};

interface GetDocumentScreenPhotosParams {
  documentId: number;
  type: 'mobile' | 'desktop' | 'tablet';
}

export const getDocumentScreenPhotos = async ({
  documentId,
  type,
}: GetDocumentScreenPhotosParams) => {
  return db.screen_Image.findMany({
    where: {
      document_id: documentId,
      type: type,
    },
  });
};

export const deleteScreenPhoto = async (screenImageId: number) => {
  const screenImage = await db.screen_Image.findUnique({
    where: {
      screen_image_id: screenImageId,
    },
  });

  if (!screenImage) {
    return null;
  }

  await del(screenImage.url);

  return db.screen_Image.delete({
    where: {
      screen_image_id: screenImageId,
    },
  });
};

export function getDocumentTitle({ documentId }: DocumentIdProps) {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    select: {
      title: true,
    },
  });
}

export function getDocumentDescription({ documentId }: DocumentIdProps) {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    select: {
      description: true,
    },
  });
}

export function getDocumentThumbnail({ documentId }: DocumentIdProps) {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    select: {
      thumbnail: true,
    },
  });
}

export function getDocumentStartEndDate({ documentId }: DocumentIdProps) {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    select: {
      start_date: true,
      end_date: true,
    },
  });
}

export function getDocumentContent({ documentId }: DocumentIdProps) {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    select: {
      content: true,
    },
  });
}

export function getDocumentTagList({ documentId }: DocumentIdProps) {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    include: {
      project_tags: true,
    },
  });
}

export function getDocumentPublishedDate({ documentId }: DocumentIdProps) {
  return db.documents.findUnique({
    where: {
      document_id: documentId,
    },
    select: {
      reg_date: true,
    },
  });
}
