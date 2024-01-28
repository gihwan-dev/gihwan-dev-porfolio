import { db } from '../db';

import { put } from '@vercel/blob';

export const getDocumentType = () => {
  return db.document_Type.findMany();
};

export const getAllDocument = (page: number) => {
  return db.documents.findMany({
    orderBy: {
      reg_date: 'desc',
    },
    skip: page * 10,
  });
};

export const countAll = () => {
  return db.documents.count();
};

export const createContent = async (model: string, type: string) => {
  return db.documents.create({
    data: {
      content: model,
      description: '',
      thumbnail: '',
      title: '',
      document_type: {
        connect: {
          document_type_name: type,
        },
      },
    },
  });
};
