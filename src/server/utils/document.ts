import { db } from '../db';

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
